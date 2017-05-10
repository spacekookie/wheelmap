# encoding: utf-8

namespace :streetspotr do
  include ActionView::Helpers::TextHelper

  desc 'Check data from StreetSpotr'
  task :check do
    csv_file = ENV['file']
    raise 'Usage: bundle exec rake streetspotr:check file=<your_csv_file>' unless csv_file

    wheelchair_stati = Hash.new(0)
    toilet_stati = Hash.new(0)

    CSV.foreach(csv_file, headers: true, header_converters: :symbol, col_sep: ';', row_sep: :auto) do |row|
      id = row[:refid]
      next if id.blank?

      step = has_step(row)
      toilet = toilet(row)
      indoor = indoor(row)

      status = wheelchair_status(step, indoor)
      toilet = wheelchair_toilet(status, toilet)

      puts "Step: #{step}, Toilet: #{toilet}, Indoor: #{indoor} -> Status: #{status}, Toilet: #{toilet}."

      wheelchair_stati[status.to_sym] += 1
      toilet_stati[toilet.to_sym] += 1
    end

    puts
    puts "Wheelchair: Yes: #{wheelchair_stati[:yes]}, Limited: #{wheelchair_stati[:limited]}, No: #{wheelchair_stati[:no]}, Unknown #{wheelchair_stati[:unknown]}."
    puts "Toilet: Yes: #{toilet_stati[:yes]}, No: #{toilet_stati[:no]}, Unknown #{toilet_stati[:unknown]}."
  end

  desc 'Import data from StreetSpotr'
  task import: :environment do

    csv_file = ENV['file']
    raise 'Usage: bundle exec rake streetspotr:import file=<your_csv_file>' unless csv_file

    poi = nil
    count = 0
    provider = Provider.find_or_create_by(name: 'Streetspotr')

    wheelchair_stati = Hash.new(0)
    toilet_stati = Hash.new(0)
    skipped = Hash.new(0)
    imported = Hash.new(0)

    # Remove 4-byte characters (e.g. emoji) in strings
    UTF8_TO_UTF8MB4_CONVERTER = ->(str) { str.encode('utf-8', invalid: :replace, undef: :replace, replace: '').each_char.select { |char| char.bytesize < 4 }.join }

    CSV.foreach(csv_file, converters: UTF8_TO_UTF8MB4_CONVERTER, headers: true, header_converters: :symbol, col_sep: ';', row_sep: :auto) do |row|
      osm_id = row[:attr_id]

      if osm_id.blank?
        puts "Skipped: No import - osm_id can't be blank!"
        skipped[:removed] += 1
        next
      else

        # Find the POI
        poi = Poi.find_by(osm_id: osm_id)

        if poi == nil
          puts "Skipped: POI for osm_id #{osm_id} not found."
          skipped[:removed] += 1
          next
        else

          step = has_step(row)
          toilet = toilet(row)
          indoor = indoor(row)

          status = wheelchair_status(step, indoor)
          toilet = wheelchair_toilet(toilet)

          puts "Step: #{step}, Toilet: #{toilet}, Indoor: #{indoor} -> Status: #{status}, Toilet: #{toilet}."

          if status == 'unknown'
            puts 'Skipped: Unknown Status.'
            skipped[:unknown] += 1
            count += 1
            next
          end

          wheelchair_stati[status.to_sym] += 1
          toilet_stati[toilet.to_sym] += 1

          provided_poi = ProvidedPoi.find_or_initialize_by(poi_id: poi.id, provider_id: provider.id)
          provided_poi.wheelchair = minimal_status([provided_poi.wheelchair, status].compact.uniq)
          provided_poi.wheelchair_toilet = minimal_status([provided_poi.wheelchair_toilet].compact.uniq)

          # Find the photo
          image = Photo.find_by(source_url: row[:photo_url])

          # Check for photo duplicates
          if image
            puts "Skipped: Photo #{image.id} already imported."
            skipped[:removed] += 1
          else
            p = photo(poi, row)
            p.save!
            imported[:photo] += 1
            provided_poi.url = row[:photo_url]
            imported[:provided_poi] += 1
            puts "Photo: Photo with osm_id #{osm_id} saved!"
          end

          provided_poi.save!
          puts "Provided Poi: #{provided_poi.id} saved!"

        end
      end
    end

    puts
    puts "Wheelchair: Yes: #{wheelchair_stati[:yes]}, Limited: #{wheelchair_stati[:limited]}, No: #{wheelchair_stati[:no]}, Unknown #{wheelchair_stati[:unknown]}."
    puts "Toilet: Yes: #{toilet_stati[:yes]}, No: #{toilet_stati[:no]}, Unknown #{toilet_stati[:unknown]}."
    puts "Newly Saved: Photos: #{imported[:photo]}, Newly Connected: ProvidedPoi: #{imported[:provided_poi]}."
    puts "Skipped: Unknown: #{skipped[:unknown]}, Skipped: Not imported: #{skipped[:removed]}."
  end

  def has_step(row)
    read_status(row, :step)
  end

  def toilet(row)
    read_status(row, :toilet)
  end

  def indoor(row)
    read_status(row, :indoor)
  end

  def read_status(row, key)
    if row.key? key
      status = row[key].to_s.strip.downcase

      if %w(yes ja).include? status
        return 'yes'
      elsif %w(limited teilweise).include? status
        return 'limited'
      elsif %w(no nein).include? status
        return 'no'
      else
        return 'unknown'
      end
    end

    key_yes = (key.to_s + '_yes').to_sym
    key_no = (key.to_s + '_no').to_sym

    if row.key?(key_yes) && row.key?(key_no)
      status_yes = !row[key_yes].to_i.zero?
      status_no = !row[key_no].to_i.zero?

      if status_yes
        return 'yes'
      elsif status_no
        return 'no'
      else
        return 'unknown'
      end
    end

    raise "Cannot read value for #{key}"
  end

  def photo(node, row)
    photo_url = row[:photo_url]
    photo_caption = row[:photo_caption]
    new_photo = node.photos.build
    new_photo.remote_image_url = photo_url
    new_photo.source_url = photo_url

    unless photo_caption.blank?
      # Omit photo captions that are longer than 255 varchar
      if photo_caption.length > 255
        new_photo_caption_string = truncate(photo_caption, length: 255, omission: " (...)")
        puts "OMITTED PHOTO CAPTION: #{new_photo_caption_string}"
        new_photo.caption = new_photo_caption_string
      else
        new_photo.caption = photo_caption
      end
    end
    new_photo.user = User.wheelmap_visitor
    new_photo
  end


  def minimal_status(stati)
    return 'no' if stati.include?('no')
    return 'limited' if stati.include?('limited')
    stati.first
  end

  def wheelchair_status(has_step, indoor)
    if has_step == 'yes' && indoor == 'yes'
      return 'no'
    elsif has_step == 'yes' && indoor == 'no'
      return 'no'
    elsif has_step == 'no' && indoor == 'yes'
      return 'limited'
    elsif has_step == 'no' && indoor == 'no'
      return 'yes'
    else
      return 'unknown'
    end
    status
  end

  def wheelchair_toilet(toilet)
    if toilet == 'yes'
      return 'yes'
    elsif toilet == 'no'
      return 'no'
    else
      return 'unknown'
    end
    toilet
  end
end

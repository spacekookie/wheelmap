namespace :export do
  require 'csv'

  desc 'Export CSV of nodes'
  task :nodes => :environment do
    region_name = ENV['REGION']
    raise "Run rake export:nodes REGION=Berlin" unless region_name
    region = Region.find_by_name(region_name)
    raise "Region #{region_name} not found!" unless region
    csv_string = ""
    csv_string = FasterCSV.generate(:force_quotes => true) do |csv|
      csv << ["osm_id", "lat", "lon", "Rollstuhlstatus", "Kommentar", "name", "Typ", "Strasse", "Hausnummer", "PLZ", "Stadt", "Telefon", "URL"]
      Poi.including_category.within_region(region).find_each do |poi|
        csv << [poi.osm_id, poi.lat, poi.lon, poi.wheelchair, poi.wheelchair_description, poi.name, poi.node_type.try(:localized_name), poi.street, poi.housenumber, poi.postcode, poi.city, poi.phone, poi.website]
      end
    end
    puts csv_string
  end

  desc 'Export Categories and NodeTypes'
  task :categories => :environment do
    csv_string = ""
    csv_string = FasterCSV.generate(:force_quotes => true) do |csv|
      csv << ["wheelmap-Kategorien", "wheelmap-Typen", "OSM Key", "OSM Value"]
      Category.all.each do |category|
        category.node_types.each do |node_type|
          csv << [node_type.category.localized_name, node_type.localized_name, node_type.osm_key, node_type.osm_value]
        end
      end
    end
    puts csv_string
  end

end
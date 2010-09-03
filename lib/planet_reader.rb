# PlanetReader liest OSM-Planet-Files ein und aktualisiert die Datenbank.

require 'rubygems' 
require 'libxml'

class PlanetReader
  
  include LibXML::XML::SaxParser::Callbacks

  # Konstruktor.
  #
  def initialize(stream=STDIN)
    @start_time = Time.now
    @processed = 0
    @parser = LibXML::XML::SaxParser.io(stream)
    @parser.callbacks = self
    @ignore = false
    Crewait.start_waiting
    @to_be_deleted = []
  end

  # Hauptmethode. Liest die Datei und verarbeitet sie.
  #
  def load
    begin
      @parser.parse
    rescue Exception => e
      puts e.message
    ensure
      Crewait.go!
      flush_pois(0)
      sleep 1
      @duration = (Time.now - @start_time).to_i
      puts "\nProcessed #{@processed} nodes in #{@duration}s ~= #{@processed/@duration}/s"
    end
  end
  
  def flush_pois(min_amount=200)
    if @to_be_deleted.size >= min_amount
      Poi.delete(@to_be_deleted)
      @to_be_deleted = []
    end
    
  end

  # Callback-Methode des XML-Parsers.
  #
  def on_start_element(element, attributes)
    return if @ignore
    case element
    when 'way'
      @ignore = true
    when 'relation'
      @ignore = true
    when 'tag'
      @poi[:tags][attributes['k']] = attributes['v']
    when 'node'
      @poi = {:osm_id => attributes['id'],
              :geom => Point.from_x_y(attributes['lon'], attributes['lat']),
              :version => attributes['version'],
              :tags => {}}
    when 'modify'
      @changemode = element if @osmchange
    when 'delete'
      @changemode = element if @osmchange
    when 'create'
      @changemode = element if @osmchange
    when 'osm'
      @osmchange = false
    when 'osmChange'
      @osmchange = true
    else
      # ignore all other nodes
    end
  end

  # Callback-Methode des XML-Parsers.
  #
  def on_end_element(element)
    case element
    when 'way'
      @ignore = false
    when 'relation'
      @ignore = false
    when 'delete'
      flush_pois
    when 'create'
      Crewait.go!
    when 'modify'
      Crewait.go!
      flush_pois
    when 'node'
      process_poi 
      @processed += 1
      
      if (@processed % 10000 == 0)
        Crewait.go!
        print("\r#{@processed/10000}0k nodes")
        STDOUT.flush
      end
      @poi = nil
      
    end

  end
  
  def valid?
    @poi && !@poi[:tags].blank? &&
      ( @poi[:tags].has_key?('amenity') ||
        @poi[:tags].has_key?('shop') ||
        @poi[:tags].has_key?('tourism') ||
        @poi[:tags].has_key?('natural') ||
        @poi[:tags].has_key?('sport') ||
        @poi[:tags].has_key?('leisure') ||
        @poi[:tags].has_key?('historic')
      )
  end

  # Verarbeitet einen POI.
  #
  def process_poi
    if !@osmchange
      # Neue POIs aus *.osm
      # Purer input aus einem Planet Dump.
      # Stumpf einfach alles in die DB hauen!
      Poi.crewait(@poi) if valid?
      
    elsif @changemode == 'create'
      # Neue POIs (aus <create> in .osc) werden
      # importiert, wenn sie interessant sind.
      Poi.crewait(@poi) if valid?

    elsif @changemode == 'modify'
      # Bei geaenderten POIs kommt es darauf an:

      if (valid?)
        # falls die neue Version des Nodes interessant ist, muessen
        # wir schauen: entweder ist der schon in der Datenbank,
        # dann brauchts einen Update, sonst einen Save. Es ist uns
        # aber zu zeitaufwendig, erst einen "find" zu machen - wir
        # probieren den Save, und wenn der nicht geht, probieren wir
        # den Update.
        Poi.crewait(@poi)
      else

        # falls die neue Version des Nodes nicht interessant ist,
        # muss eine eventuell existierende alte Version geloescht
        # werden. wir pruefen hier nicht extra mit 
        # "find_by_osm_id", ob eine alte Version ueberhaupt 
        # existiert, denn das waere Zeitverschwendung; der
        # delete-Aufruf macht das schneller.
        @to_be_deleted << @poi[:osm_id]
        flush_pois

      end

    elsif @changemode == 'delete'
      @to_be_deleted << @poi[:osm_id]
      flush_pois
    end
  end
end


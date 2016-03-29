require 'capybara/poltergeist'
require 'phantomjs'

# disable logger
module NullPoltergeistLogger
  def self.puts(*)
  end
end

# Driver setup to find PhantomJS executable and to not fill output with logging
Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(
    app,
    phantomjs: Phantomjs.path,
    phantomjs_logger: NullPoltergeistLogger)
end

Capybara.configure do |config|
  config.javascript_driver = :poltergeist
  config.server_port       = 8881
  config.default_wait_time = 3   # in seconds
end

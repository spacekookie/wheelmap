module NavigationHelpers
  # Maps a name to a path. Used by the
  #
  #   When /^I go to (.+)$/ do |page_name|
  #
  # step definition in web_steps.rb
  #
  def path_to(page_name)
    case page_name

    when /the home\s?page/
      '/'
      
    when /the oauth page/
      '/oauth'
      
    when /the new oauth page/
      '/oauth/new'
    
    when /the callback page/
      '/oauth/callback'
      
    when /the sign_in page/
      '/users/sign_in'
    
    when /the authorization page/
      "http://api06.dev.openstreetmap.org/oauth/authorize?oauth_token=#{session[:request_token].token}"

    when /the registration page/
      arguments = CGI.escape("/oauth/authorize?oauth_token=#{session[:request_token].token}")
      "http://api06.dev.openstreetmap.org/user/new?referer=#{arguments}"
    
    when /the nodes page/
      nodes_path
      
    when /the nodes javascript page/
      nodes_path()
    
    when /the new node page/
      new_node_path

    # Add more mappings here.
    # Here is an example that pulls values out of the Regexp:
    #
    #   when /^(.*)'s profile page$/i
    #     user_profile_path(User.find_by_login($1))

    else
      begin
        page_name =~ /the (.*) page/
        path_components = $1.split(/\s+/)
        self.send(path_components.push('path').join('_').to_sym)
      rescue Object => e
        raise "Can't find mapping from \"#{page_name}\" to a path.\n" +
          "Now, go and add a mapping in #{__FILE__}"
      end
    end
  end
end

World(NavigationHelpers)

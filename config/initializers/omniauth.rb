Rails.application.config.middleware.use OmniAuth::Builder do
  provider :census, ENV['CENSUS_CLIENT_ID'], ENV['CENSUS_CLIENT_SECRET'], name: 'census'
  provider :github, ENV['GITHUB_CLIENT_ID'], ENV['GITHUB_CLIENT_SECRET'], scope: 'user:email'
end

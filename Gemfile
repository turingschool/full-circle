source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.4.1'

gem 'rails', '~> 5.1.5'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.11'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

gem 'faraday'

gem 'figaro'
gem 'omniauth'
gem 'omniauth-github'
gem 'faker', '>= 1.8.4'

gem 'react-rails', '~> 2.2.1'
gem 'fetch-rails'

gem 'jquery-rails'

gem 'browserify-rails', '~> 4.2.0'

gem 'bootstrap-sass', '~> 3.3.6'
gem 'momentjs-rails', '>= 2.9.0'
gem 'bootstrap3-datetimepicker-rails', '~> 4.17.47'

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :development, :test do
  gem 'factory_girl_rails', '~> 4.0'
  gem 'pry-rails'
end

group :test do
  gem 'simplecov', :require => false
  gem 'rspec-rails'
  gem 'capybara'
  gem 'poltergeist'
  gem 'phantomjs', '~> 2.0'
  gem 'launchy'
  gem 'shoulda-matchers'
end
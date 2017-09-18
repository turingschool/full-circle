namespace :production do
  desc 'Prepare for local Production'
  task :build do
    system("RAILS_ENV=production rake db:drop DISABLE_DATABASE_ENVIRONMENT_CHECK=1")
    system("RAILS_ENV=production rake db:create")
    system("RAILS_ENV=production rake db:migrate")
    system("RAILS_ENV=production rake db:seed")
    system("RAILS_ENV=production rake assets:clobber")
    system("RAILS_ENV=production rake assets:precompile")
  end

  desc 'Run Server in Production'
  task :s do
    system("RAILS_ENV=production rails s")
  end

  desc 'Run Console in Production'
  task :c do
    system("RAILS_ENV=production rails c")
  end

  desc 'Build Production Database'
  task :create do
    system("RAILS_ENV=production rake db:create")
  end

end
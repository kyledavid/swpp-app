desc "This task is called by the Heroku scheduler add-on"
task :rain_update => :environment do
  puts "Updating rain data..."
  JobSite.rainupdate
  puts "Rain data updated successfully"
end
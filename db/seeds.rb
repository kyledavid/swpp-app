# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
jobs = {[ job_name: nil, job_number: 8433, zip_code: "89141", cross_street: "dean martin & cactus 89141", abbr: nil, latitude: 35.9990911, longitude: -115.1836404],
        [ job_name: "Place holder", job_number: 8425, zip_code: "89141", cross_street: "southern highlands & turf center drive 89141", abbr: nil, latitude: 41.75681489999999, longitude: -88.04412459999999],
        [ job_name: "TUSCAN CLIFFS", job_number: 1757, zip_code: "89141", cross_street: "southern highlands & star hills 89141", abbr: "BCS", latitude: 36.1916932, longitude: -115.2996396]}
        
        jobs.each do |jobn, jobnmbr, zipc, crosss, abb, lat, lon|
            
          JobSite.create(job_name: jobn, job_number: jobnmbr, zip_code: zipc, cross_street: crosss, abbr: abb, latitude: lat, longitude: lon)
        end
class JobSite < ActiveRecord::Base
    
    has_many :rains
    
    geocoded_by :cross_street
    after_validation :geocode
    
    def self.rainupdate
            @job = JobSite.all
            @job.each do |jb|
            lat = jb.latitude
            lon = jb.longitude
            coordinates = "#{lat}, #{lon}"
            uri = URI('https://earthnetworks.azure-api.net/data/observations/v1/current?')
            uri.query = URI.encode_www_form({
                # Request parameters
                'verbose' => 'TRUE',
                'location' => coordinates,
                'locationtype' => 'latitudelongitude'
            })
            
            request = Net::HTTP::Get.new(uri.request_uri)
            # Request headers
            request['Ocp-Apim-Subscription-Key'] = 'c830c36f4c724b42bb14486214344533'
            # Request body
            request.body = "{body}"
            
            response = Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
                http.request(request)
            
           end
           results = JSON.parse(response.body)
           @input = Rain.new(:amount => results['rainRate'], :job_sites_id => jb.id )
           @input.save
           sleep(4)
         end
        
    end
   
end
          
       
require 'net/http'

uri = URI('https://earthnetworks.azure-api.net/data/observations/v1/current?')
uri.query = URI.encode_www_form({
    # Request parameters
    'verbose' => 'TRUE',
    'location' => '	36.114647, 	-115.172813',
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

puts response.body
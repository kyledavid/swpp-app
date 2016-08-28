class JobSitesController < ApplicationController
  
  before_action :set_job_site, only: [:show, :edit, :update, :destroy]

  # GET /job_sites
  # GET /job_sites.json
  def index
    
            coordinates = '36.039524,-114.981720'
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
          
           @coordinates = coordinates
           @testresults = JSON.parse(response.body)
           @job_sites = JobSite.all
  end
    
 
  def show
  end

  # GET /job_sites/new
  def new
    @job_site = JobSite.new
  end

  # GET /job_sites/1/edit
  def edit
  end

  # POST /job_sites
  # POST /job_sites.json
  def create
    @job_site = JobSite.new(job_site_params)

    respond_to do |format|
      if @job_site.save
        format.html { redirect_to @job_site, notice: 'Job site was successfully created.' }
        format.json { render :show, status: :created, location: @job_site }
      else
        format.html { render :new }
        format.json { render json: @job_site.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /job_sites/1
  # PATCH/PUT /job_sites/1.json
  def update
    respond_to do |format|
      if @job_site.update(job_site_params)
        format.html { redirect_to @job_site, notice: 'Job site was successfully updated.' }
        format.json { render :show, status: :ok, location: @job_site }
      else
        format.html { render :edit }
        format.json { render json: @job_site.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /job_sites/1
  # DELETE /job_sites/1.json
  def destroy
    @job_site.destroy
    respond_to do |format|
      format.html { redirect_to job_sites_url, notice: 'Job site was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job_site
      @job_site = JobSite.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def job_site_params
      params.fetch(:job_site, {})
    end
end

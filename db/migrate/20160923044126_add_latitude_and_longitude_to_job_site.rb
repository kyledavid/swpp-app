class AddLatitudeAndLongitudeToJobSite < ActiveRecord::Migration
  def change
    add_column :job_sites, :latitude, :float
    add_column :job_sites, :longitude, :float
  end
end

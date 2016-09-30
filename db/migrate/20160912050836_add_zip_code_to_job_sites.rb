class AddZipCodeToJobSites < ActiveRecord::Migration
  def change
    add_column :job_sites, :zip_code, :string
  end
end

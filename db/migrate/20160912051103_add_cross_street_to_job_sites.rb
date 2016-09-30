class AddCrossStreetToJobSites < ActiveRecord::Migration
  def change
    add_column :job_sites, :cross_street, :string
  end
end

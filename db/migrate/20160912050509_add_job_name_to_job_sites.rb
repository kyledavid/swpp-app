class AddJobNameToJobSites < ActiveRecord::Migration
  def change
    add_column :job_sites, :job_name, :string
  end
end

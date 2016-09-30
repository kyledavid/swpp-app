class AddJobNumberToJobSites < ActiveRecord::Migration
  def change
    add_column :job_sites, :job_number, :integer
  end
end

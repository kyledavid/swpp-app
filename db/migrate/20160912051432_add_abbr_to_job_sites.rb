class AddAbbrToJobSites < ActiveRecord::Migration
  def change
    add_column :job_sites, :abbr, :string
  end
end

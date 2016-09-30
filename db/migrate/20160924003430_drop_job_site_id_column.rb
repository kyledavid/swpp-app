class DropJobSiteIdColumn < ActiveRecord::Migration
  def change
    remove_column :rains, :job_site_id
  end
end

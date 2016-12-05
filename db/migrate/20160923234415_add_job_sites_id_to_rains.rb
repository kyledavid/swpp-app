class AddJobSitesIdToRains < ActiveRecord::Migration
  def change
      #Below was added later in seperate migration.  Uncomment to use. But only here for reference.
      add_column :rains, :job_sites_id, :integer
  end
end

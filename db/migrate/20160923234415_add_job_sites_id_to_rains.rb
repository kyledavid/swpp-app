class AddJobSitesIdToRains < ActiveRecord::Migration
  def change
      #Below was added later in seperate migration.  Uncomment to use. But only here for reference.
      add_reference :rains, :job_sites, index: true, foreign_key: true
  end
end

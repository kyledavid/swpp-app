class CreateJobSites < ActiveRecord::Migration
  def change
    create_table :job_sites do |t|

      t.timestamps null: false
    end
  end
end

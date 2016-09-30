class AddForeignKeyToRainsss < ActiveRecord::Migration
  def change
    add_reference :rains, :job_sites, index: true, foreign_key: true
  end
end

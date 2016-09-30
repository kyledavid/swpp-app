class AddForeignKeyToRains < ActiveRecord::Migration
  def change
    add_foreign_key :rains, :job_sites
  end
end

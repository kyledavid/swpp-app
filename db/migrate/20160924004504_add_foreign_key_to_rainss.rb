class AddForeignKeyToRainss < ActiveRecord::Migration
  def change
    add_reference :job_sites, :rains, index: true, foreign_key: true
  end
end

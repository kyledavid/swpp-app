class CreateRains < ActiveRecord::Migration
  def change
    create_table :rains do |t|
      t.string :amount
      t.references :job_site_id, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

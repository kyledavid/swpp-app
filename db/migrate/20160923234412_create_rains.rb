class CreateRains < ActiveRecord::Migration
  def change
    create_table :rains do |t|
      t.string :amount
      #Below was added later in seperate migration.  Uncomment to use. But only here for reference.
      #t.references :job_site_id, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :rains, :job_site_id_id, :job_site_id
  end
end

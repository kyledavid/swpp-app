class DropTable < ActiveRecord::Migration
  def change
    drop_table :rains
  end
end

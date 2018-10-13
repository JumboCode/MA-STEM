class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
  	rename_column :resources, :resource_type, :r_type
  end
end

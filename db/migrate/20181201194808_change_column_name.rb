class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
	rename_column :careers_interests, :carerer_id, :career_id
  end
end

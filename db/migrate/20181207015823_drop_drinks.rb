class DropDrinks < ActiveRecord::Migration[5.0]
  def change
  	drop_table :drinks
	drop_table :ingredients
  end
end

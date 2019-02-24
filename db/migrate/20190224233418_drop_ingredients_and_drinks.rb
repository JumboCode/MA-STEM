class DropIngredientsAndDrinks < ActiveRecord::Migration[5.0]
  def change
  		drop_table :ingredients
  		drop_table :drinks
  end
end

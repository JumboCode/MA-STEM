class CareerColumnns < ActiveRecord::Migration[5.0]
  def change
  	add_column :careers, :name,        :string
	add_column :careers, :strengths,   :text 
	add_column :careers, :generic,     :text
	add_column :careers, :description, :text
  end
end

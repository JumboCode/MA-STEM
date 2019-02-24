class CreateProfessionals < ActiveRecord::Migration[5.0]
  def change
    create_table :professionals do |t|
      t.string :name
      t.string :title
      t.string :company
      t.string :education
      
      t.timestamps
    end
  end
end

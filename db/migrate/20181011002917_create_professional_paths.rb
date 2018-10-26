class CreateProfessionalPaths < ActiveRecord::Migration[5.0]
  def change
    create_table :professional_paths do |t|
      t.string :name
      t.string :title
      t.string :description
      t.jsonb :contact

      t.timestamps
    end
  end
end

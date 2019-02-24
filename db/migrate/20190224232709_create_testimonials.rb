class CreateTestimonials < ActiveRecord::Migration[5.0]
  def change
    create_table :testimonials do |t|
      t.string :title
      t.string :content
      t.belongs_to :professional

      t.timestamps
    end
  end
end

class AddTestimonials < ActiveRecord::Migration[5.0]
  def change
  	create_table :testimonials do |t|
  		t.string :title
  		t.string :content
  	end
  end

end
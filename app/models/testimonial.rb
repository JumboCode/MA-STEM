class Testimonial < ApplicationRecord
	belongs_to :professional

	validates_presence_of :title, :content, :professional_id
end

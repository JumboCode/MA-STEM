class Professional < ApplicationRecord
	has_many :testimonials

	# validations: a resource is required to have
	# the following fields present
	validates_presence_of :name, :title, :company, :education
end

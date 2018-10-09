class Resource < ApplicationRecord
	
	# validations: a resource is required to have
	# the following fields present
	validates_presence_of :title, :location, :type, :link
end

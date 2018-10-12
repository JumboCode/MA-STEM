class ProfessionalPath < ApplicationRecord
	
	# validations: a resource is required to have
	# the following fields present
	 validates_presence_of :name, :title, :description, :contact
end

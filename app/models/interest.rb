class Interest < ApplicationRecord
	string :name
	has_and_belongs_to_many :careers
end

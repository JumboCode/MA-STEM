class Field < ApplicationRecord
	string :name
	has_many :careers
	has_many :resources
end

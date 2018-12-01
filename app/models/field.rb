class Field < ApplicationRecord
	String :name
	has_many :careers
	has_many :resources
end

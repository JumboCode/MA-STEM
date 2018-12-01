class Interest < ApplicationRecord
	String :name
	has_and_belongs_to_many :careers
end

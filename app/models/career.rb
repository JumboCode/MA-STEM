class Career < ApplicationRecord
	string     :name
	text       :strengths
	text       :generic
	text       :description
	has_many_and_belongs_to   :interests
	belongs_to :field
end

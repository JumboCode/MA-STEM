class Career < ApplicationRecord
	string     :name
	text       :strengths
	text       :generic
	text       :description
	has_many   :interests
	belongs_to :field
end

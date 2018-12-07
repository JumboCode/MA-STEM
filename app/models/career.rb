class Career < ApplicationRecord
	String     :name
	Text       :strengths
	Text       :generic
	Text       :description
	has_many_and_belongs_to   :interests
	belongs_to :field
end

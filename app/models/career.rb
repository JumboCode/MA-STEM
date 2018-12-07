class Career < ApplicationRecord
	String :name
	String :strengths
	String :generic
	String :description
	has_and_belongs_to_many :interests
	belongs_to :field

	validates_presence_of :name, :strengths, :generic, :description, :career_id, :field_id
end

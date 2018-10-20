class ProfessionalPathController < ApplicationController
	before_action :set_professionalPath, only: [:show]

	def index
		@professionalPaths = ProfessionalPath.all
		json_response(@professionalPaths)
	end


end

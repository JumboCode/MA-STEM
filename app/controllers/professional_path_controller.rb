class ProfessionalPathController < ApplicationController
	before_action :set_ProfessionalPath, only: [:show]

	def index
		@ProfessionalPaths = ProfessionalPath.all
		json_response(@ProfessionalPaths)
	end


end

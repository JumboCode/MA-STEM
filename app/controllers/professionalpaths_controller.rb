class ProfessionalpathsController < ApplicationController
	before_action :set_professionalpath, only: [:show]

	def index
		@professionalpaths = Professionalpath.all
		json_response(@professionalpaths)
	end


end

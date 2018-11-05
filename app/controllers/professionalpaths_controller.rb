class ProfessionalpathsController < ApplicationController

	def index
		@professionalpaths = Professionalpath.all
		json_response(@professionalpaths)
	end


end

class ProfessionalpathsController < ApplicationController

	def index
		@professionalpaths = Professionalpath.all
		json_response(@professionalpaths)
	end

	def new
		entry = Professionalpath.new(:name        => params[:name],
			                         :title       => params[:title],
			                         :description => params[:description],
			                         :contact     => params[:contact])
		entry.save
		head 200
	end

end

class ResourcesController < ApplicationController

	def index
		@resources = Resource.all
		json_response(@resources)
	end


	def show
		begin		
			@resource = Resource.find(params[:id])
		rescue ActiveRecord::RecordNotFound
			json_response("/Couldn't find Resource/",404);
		end

		if not @resource.blank?
			json_response(@resource)
		end
	end

	def showLocation
		puts "location"
		begin
			@resource = Resource.find(params[:location])
		rescue ActiveRecord::RecordNotFound
			json_response("/Couldn't find Resource by LOC/",404);
		end

		if not @resource.blank?
			json_response(@resource)
		end	
	end
end

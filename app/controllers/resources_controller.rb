class ResourcesController < ApplicationController
	#before_action :set_resource, only: [:show]

	def index
		@resources = Resource.all
		json_response(@resources)
	end


	def show
		begin
			@resource = Resource.find(params[:id]) # not scalable
		rescue ActiveRecord::RecordNotFound
			json_response("/Couldn't find Resource/",404);
		end

		if not @resource.blank?
			json_response(@resource)
		end

	end

end

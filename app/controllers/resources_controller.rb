class ResourcesController < ApplicationController
	#before_action :set_resource, only: [:show]

	def index
		@resources = Resource.all
		json_response(@resources)
	end


	def show
		@resource = Resource.all.find(params[:id]) # not scalable
		if not @resource.blank?
			json_response(@resource)
		else 
			raise ActiveRecord::RecordNotFound
		end
	end	

end

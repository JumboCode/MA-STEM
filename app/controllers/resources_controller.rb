class ResourcesController < ApplicationController
	before_action :set_resource, only: [:show]

	def index
		@resources = Resource.all
		json_response(@resources)
	end


end

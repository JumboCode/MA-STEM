class ResourcesController < ApplicationController

	def index
		@resources = Resource.all
		json_response(@resources)
	end


	def show
		@resource = Resource.find_by id: params[:id]

		if not @resource.blank?
			json_response(@resource)
		else
			json_response("/Couldn't find Resource/",404);
		end
	end

	def showLocation
		@resource = Resource.where(location: params[:location])

		if not @resource.empty?
			json_response(@resource)
		else
			json_response("/Couldn't find Resource/",404);
		end	
	end
	
	def showr_type
		@resource = Resource.where(r_type: params[:r_type])

		if not @resource.empty?
			json_response(@resource)
		else
			json_response("/Couldn't find Resource/",404);
		end	
	end

	def create
		@resource = Resource.new

		@resource.title = params[:title]
		@resource.description = params[:description]
		@resource.r_type = params[:r_type]
		@resource.location = params[:location]
		@resource.link = params[:link]

		begin
			@resource.save!
			json_response(@resource, :created)
		rescue ActiveRecord::RecordInvalid => invalid
			json_response("/Validation failed: Attributes can't be blank/", 422)
		end		
	end

	def update
		@resource = Resource.where(id: params[:id])

		if not @resource.empty?

			@resource.update(
				title: params[:title], 
				description: params[:description], 
				r_type: params[:r_type], 
				location: params[:location],
				link: params[:link])
			json_response('',204)
		else
			json_response("/Couldn't find Resource/",404);
		end
	end


end

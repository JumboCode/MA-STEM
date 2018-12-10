class CareersController < ApplicationController


	def index
		@careers = Career.all
		json_response(@careers)
	end

	def show
		@career = Career.find_by id: params[:id]

		if not @career.blank?
			json_response(@career)
		else
			json_response("/Couldn't find Career/",404);
		end
	end

	def showByInterest
		@career_ids = Career.includes(:interests).where(interests: {id: params[:id]})

		if not @career_ids.blank?
			json_response(@career_ids)
		else
			json_response("/Couldn't find any careers/", 404);
		end
	end

	def new
		# params.require([:name,:strengths,:generic])

		@entry = Career.new(name: 				params[:name],
								  strengths: 		params[:strengths],
								  generic:        params[:generic],
								  description: 	params[:description])
		begin
			@entry.save!
			json_response(@entry, :created)
		rescue ActiveRecord::RecordInvalid => invalid
			json_response("/Validation failed: Attributes can't be blank/", 422)
		end

	end


	def update

		begin
		@entry = Career.find(params[:id])


		@entry.update_attributes(params.permit(:name,
																:strengths,
																:generic,
																:description))
		@entry.save!
		json_response('',204);
		rescue ActiveRecord::RecordNotFound
			json_response("/Couldn't find Career/",404);
		end
	end

end
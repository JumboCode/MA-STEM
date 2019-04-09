class TestimonialsController < ApplicationController

	def index
		@testimonials = Testimonial.joins(:professional)
		                           .select("name", 
		                           	       "testimonials.title AS tsm_title", 
		                           	       "professionals.title AS job_title", 
		                           	       "company", 
		                           	       "content", 
		                           	       "professional_id")

		@cleaned = []
		@curr_id = -1
		@i       = -1

		@testimonials.each do |curr|
			if curr.professional_id != @curr_id then
				@cleaned.push({'name'         => curr.name,
				               'job_title'    => curr.job_title,
				               'company'      => curr.company,
				               'testimonials' => [],})
				@curr_id = curr.professional_id
				@i += 1
			end
			@cleaned[@i]['testimonials'].push({'title'   => curr.tsm_title,
			                                   'content' => curr.content,})
		end

		json_response(@cleaned.to_json)
	end

end
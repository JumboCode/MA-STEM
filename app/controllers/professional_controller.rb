class ProfessionalController < ApplicationController

	def index
		@professionals = Professional.all

		@testimonials = Testimonial.all

		for professional in @professionals
			# testimonials = @testimonials.index[professional.professional_id]
			puts "#{professional.name}"

		end
		json_response(@professionals,200)
	end

end
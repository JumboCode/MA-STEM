require 'rails_helper'

RSpec.describe 'ProfessionalPath API', type: :request do
	# initialize test data
	let!(:professionalPaths) { create_list(:ProfessionalPath, 10) }
	let(:professionalPath_id) { professionalPaths.first_id }

	# Test suite for GET /professionalpath
	describe 'GET /professionalPaths' do
		# make an HTTP get request before each example
		before { get '/professionalPaths'}

		it 'returns professionalPaths' do
			expect(json).not_to be_empty
			expect(json.size).to eq(10)
		end

		it 'returns status code 200' do
			expect(response).to have_http_status(200)
		end
	end

end

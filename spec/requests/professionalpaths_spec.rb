require 'rails_helper'

RSpec.describe 'ProfessionalPath API', type: :request do
	# initialize test data
	let!(:ProfessionalPaths) { create_list(:Professionalpath, 10) }
	let(:ProfessionalPath_id) { ProfessionalPaths.first_id }

	# Test suite for GET /professionalpath
	describe 'GET /professionalpaths' do
		# make an HTTP get request before each example
		before { get '/professionalpaths'}

		it 'returns professionalpath' do
			expect(json).not_to be_empty
			expect(json.size).to eq(10)
		end

		it 'returns status code 200' do
			expect(response).to have_http_status(200)
		end
	end

	# Test suite for POST /professionalpaths/create
	describe 'POST /professionalpaths/create' do
		before {
			params = {:name        => 'Tony Monaco',
			          :title       => 'President at Toofts',
			          :description => 'I am also a geneticist!',
			          :contact     => 'Tufts!'}

			post '/professionalpaths/create', params.to_json, format: :json
		}

		it 'returns status code 200' do
			expect(response).to have_http_status(200)
		end
	end

end

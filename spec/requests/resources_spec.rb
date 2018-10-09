require 'rails_helper'

RSpec.describe 'Resources API', type: :request do
	# initialize test data
	let!(:resources) { create_list(:resource, 10) }
	let(:resource_id) { resources.first_id }

	# Test suite for GET /resources
	describe 'GET /resources' do
		# make an HTTP get request before each example
		before { get '/resources'}

		it 'returns resources' do
			expect(json).not_to be_empty
			expect(json.size).to eq(10)
		end

		it 'returns status code 200' do
			expect(response).to have_http_status(200)
		end
	end

end

require 'rails_helper'

RSpec.describe 'Resources API', type: :request do
	# initialize test data
	let!(:resources) { create_list(:resource, 10) }
	let(:resource_id) { resources.first.id }
	let(:resource_location) { resources.first.location }
	let(:resource_r_type) { resources.first.r_type }

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

  describe 'GET /resources/id/:id' do
      before { get "/resources/id/#{resource_id}" }

    context 'when the record exists' do
      it 'returns the resource' do
        expect(json).not_to be_empty
          expect(json['id']).to eq(resource_id)
      end

      it 'returns status code 200' do
          expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:resource_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Resource/)
      end
    end
  end

  describe 'GET /resources/location/:location' do
      before { get "/resources/location/#{resource_location}" }

    context 'when the record exists' do
      it 'returns the resource' do
	expect(json).not_to be_empty
        # returns a list of jsons!  We only check the first one
	expect(json[0]['location']).to eq(resource_location)
      end

      it 'returns status code 200' do
          expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:resource_location) { "Poughkeepsie" }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Resource/)
      end
    end
  end

  describe 'GET /resources/rtype/:r_type' do
      before { get "/resources/rtype/#{resource_r_type}" }

    context 'when the record exists' do
      it 'returns the resource' do
	expect(json).not_to be_empty
        # returns a list of jsons!  We only check the first one
	expect(json[0]['r_type']).to eq(resource_r_type)
      end

      it 'returns status code 200' do
          expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:resource_r_type) { "foo" }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Resource/)
      end
    end
  end



end

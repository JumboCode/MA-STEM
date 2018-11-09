require 'rails_helper'

RSpec.describe 'Resources API', type: :request do
	# initialize test data
	let!(:resources) { create_list(:resource, 10) }
	let(:resource_id) { resources.first.id }

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

  describe 'GET /resources/:id' do
      before { get "/resources/#{resource_id}" }

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

  describe 'GET /resources/:location' do
      before { get "/resources/#{resource_location}" }

    context 'when the record exists' do
      it 'returns the resource' do
        expect(json).not_to be_empty
          expect(json['location']).to eq(resource_location)
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



end

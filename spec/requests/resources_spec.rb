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

   # Test suite for POST /todos
  describe 'POST /resources/new' do
    # valid payload
    let(:valid_attributes) { { 
      
      title: 'test_title',
      location: 'test_local',
      description: 'test_descript',
      r_type: 'test_rtype',
      link: 'test_link'
      } }

    context 'when the request is valid' do
      before { post '/resources/new', params: valid_attributes }

      it 'creates a resource' do
        expect(json['title']).to eq('test_title')
        expect(json['location']).to eq('test_local')
        expect(json['description']).to eq('test_descript')
        expect(json['r_type']).to eq('test_rtype')
        expect(json['link']).to eq('test_link')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/resources/new', params: { title: 'Foobar' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Attributes can't be blank/)
      end
    end
  end


  describe 'PATCH /resources/id/:id' do
    let(:valid_attributes) { { title: 'Test PATCH' } }
    context 'when the record exists' do
      before { patch "/resources/id/#{resource_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

end

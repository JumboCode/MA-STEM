require 'rails_helper'

RSpec.describe 'Careers API', type: :request do

	let!(:careers) { create_list(:career, 10) }
	let(:career_id) { careers.first.id }


	# Test suite for GET /careers
	describe 'GET /careers' do
		# make an HTTP get request before each example
		before { get '/careers'}

		it 'returns careers' do
			expect(json).not_to be_empty
			expect(json.size).to eq(10)
		end

		it 'returns status code 200' do
			expect(response).to have_http_status(200)
		end
	end



	# Test suite for GET /careers/id/:id
	describe 'GET /careers/id/:id' do
		# make an HTTP get request before each example
		before { get "/careers/id/#{career_id}"}

		context 'when the record exists' do
			it 'returns the career' do
				expect(json).not_to be_empty
				expect(json['id']).to eq(career_id)
			end

			it 'returns status code 200' do
				expect(response).to have_http_status(200)
			end
		end

		context 'when the record does not exist' do
			let(:career_id) { 100 }

			it 'returns status code 404' do
				expect(response).to have_http_status(404)
			end

			it 'returns a not found message' do
				expect(response.body).to match(/Couldn't find Career/)
			end
		end
	end

	describe 'POST /careers/new' do
    # valid payload
    let(:valid_attributes) { { 
      
      name: 'test_name',
      strengths: "test_strength",
      generic: "test_generic",
      description: "test_descript"
      } }

    context 'when the request is valid' do
      before { post '/careers/new', params: valid_attributes }

      it 'creates a career' do
        expect(json['name']).to eq('test_name')
        expect(json['strengths']).to eq("test_strength")
        expect(json['description']).to eq('test_descript')
        expect(json['generic']).to eq("test_generic")
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/careers/new', params: { name: 'Foobar' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Attributes can't be blank/)
      end
    end
  end

  describe 'PATCH /careers/id/:id' do
    let(:valid_attributes) { { name: 'Test PATCH' } }
    context 'when the record exists' do
      before { patch "/careers/id/#{career_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end

  end

end
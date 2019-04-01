require 'rails_helper'

RSpec.describe 'Professionals API', type: :request do

	let!(:Professional) { create_list(:Professional, 10) }
   let(:Professional_id) { Professional.first_id }
   let!(:Testimonial) {create_list(:Testimonial,20)}

   # Test suite for GET /professionalpath
   describe 'GET /professionals' do
        # make an HTTP get request before each example
        before { get '/professionals'}

        it 'returns professional' do
        	expect(json).not_to be_empty
        	expect(json.size).to eq(10)
        end

        it 'returns status code 200' do
        	expect(response).to have_http_status(200)
        end
     end


end
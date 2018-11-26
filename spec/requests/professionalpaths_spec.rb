require 'rails_helper'

RSpec.describe 'Professionalpath API', type: :request do
    # initialize test data
    let!(:Professionalpaths) { create_list(:Professionalpath, 10) }
    let(:Professionalpath_id) { Professionalpaths.first_id }

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
            par = {name:        'Tony Monaco',
                   title:       'President at Toofts',
                   description: 'I am also a geneticist!',
                   contact:     'Tufts!'}
            hea = {'Content-Type' => 'application/json'}

            post '/professionalpaths/create', params: par.to_json, headers: hea
        }

        it 'returns status code 200' do
            expect(response).to have_http_status(200)
        end
    end

    # NOTE: Commented out because cannot figure out how to get POST to work in
    #       automation when an ID is required. Tests for POST 
    #       /professionalpaths/update are also missing for the same reason.
    # Test suite for POST /professionalpaths/delete
    # describe 'POST /professionalpaths/delete' do
    #   before {
    #       par = {id: :Professionalpath_id}
    #       hea = {'Content-Type' => 'application/json'}

    #       post '/professionalpaths/delete', params: par.to_json, headers: hea
    #   }

    #   it 'returns status code 200' do
    #       expect(response).to have_http_status(200)
    #   end
    # end

end

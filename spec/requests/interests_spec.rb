require 'rails_helper'

RSpec.describe "Interests", type: :request do
  describe "GET /interests" do
    it "works! (now write some real specs)" do
      get interests_path
      expect(response).to have_http_status(200)
    end
  end
end

require 'rails_helper'

RSpec.describe Career, type: :model do
 	it { should validate_presence_of(:name) }
 	it { should validate_presence_of(:strengths) }
 	it { should validate_presence_of(:generic) }
 	it { should validate_presence_of(:description) }
 	it { should validate_presence_of(:career_id) }
 	it { should validate_presence_of(:field_id) }
end

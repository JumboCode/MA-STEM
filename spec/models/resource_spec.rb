require 'rails_helper'
# require 'spec_helper'	

RSpec.describe Resource, type: :model do
	
	# Validation tests: ensure expected columns are present
	it { should validate_presence_of(:title) }
	it { should validate_presence_of(:location) }
	it { should validate_presence_of(:r_type) }
	it { should validate_presence_of(:link) }
end

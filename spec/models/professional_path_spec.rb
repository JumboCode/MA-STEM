require 'rails_helper'
# require 'spec_helper'

RSpec.describe ProfessionalPath, type: :model do
	
	# Validation tests: ensure expected columns are present
	it { should validate_presence_of(:name) }
	it { should validate_presence_of(:title) }
	it { should validate_presence_of(:description) }
end

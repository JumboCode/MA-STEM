require 'rails_helper'

RSpec.describe Professional, type: :model do

  # Validation tests: ensure expected columns are present
	it { should validate_presence_of(:name) }
	it { should validate_presence_of(:title) }
	it { should validate_presence_of(:company) }
	it { should validate_presence_of(:education) }

end

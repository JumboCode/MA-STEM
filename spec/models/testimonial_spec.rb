require 'rails_helper'

RSpec.describe Testimonial, type: :model do
  it { should validate_presence_of(:content) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:professional_id) }
end

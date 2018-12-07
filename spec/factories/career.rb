FactoryBot.define do
	factory :Career do
		name {Faker::Lorem.word }
		strengths {Faker::Lorem.word }
		generic { Faker::Lorem.word }
		description {Faker::Lorem.word }
	end
end	

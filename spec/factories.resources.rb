FactoryBot.define do
	factory :resource do
		title { Faker::Lorem.word }
		location {Faker::Lorem.word }
		resource_type { Faker::Lorem.word }
		link {Faker::Lorem.word}
	end
end	

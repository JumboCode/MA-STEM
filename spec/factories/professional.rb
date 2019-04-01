FactoryBot.define do
	factory :Professional do
		name { Faker::Lorem.word }
		title {Faker::Lorem.word }
		company { Faker::Lorem.word }
		education {Faker::Lorem.word}
	end
end	
FactoryBot.define do
	factory :Professionalpath do
		name {Faker::Lorem.word }
		title {Faker::Lorem.word }
		description { Faker::Lorem.word }
		contact {Faker::Lorem.word}
	end
end	

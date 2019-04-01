FactoryBot.define do
	factory :Testimonial do
		content { Faker::Lorem.word }
		title {Faker::Lorem.word }
		professional_id {Faker::Number.between(1,10)}
	end
end	
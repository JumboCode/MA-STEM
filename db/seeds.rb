# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

=end
sec = Resource.create(
  title: "SEC",
  location: "near brom-p",
  r_type: "academic building",
  link: "http://www.sec.com",
)

path = Professionalpath.create(
  name: "Mark Zuckerberg",
  title: "CEO",
  description: "I started Facebook",
  contact: "Find me on Facebook",
)

prof = Professional.create(
	name: "Tony Monaco",
	title: "President of Tufts Univ.",
	company: "Tufts",
	education: "Some good college",
)

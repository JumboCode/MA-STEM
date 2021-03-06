# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
=begin 
# negroni = Drink.create(
#   title: "Sparkling Negroni",
#   description: "The perfect cocktail for sipping after an alfresco dinner on a summer night, Negronis get their red hue and herbaceous beginning from the Italian apéritif Campari, which is mellowed out by floral gin and sweet vermouth. Top off your drink with some bubbly, and enjoy.",
#   steps: "Combine the first three ingredients in an ice-filled cocktail shaker. Shake until cold, then strain the mixture into a glass. Top with prosecco, and garnish with the orange twist.",
#   source: "http://www.architecturaldigest.com/gallery/4-easy-entertaining-summer-cocktail-recipes-5-ingredients-or-less",
# )
# negroni.ingredients.create(description: "⅓ oz. Campari")
# negroni.ingredients.create(description: "⅓ oz. gin")
# negroni.ingredients.create(description: "⅓ oz. sweet vermouth")
# negroni.ingredients.create(description: "Chilled prosecco, or other sparkling wine, for topping")
# negroni.ingredients.create(description: "Orange peel twist (optional)")

# margarita = Drink.create(
#   title: "Pineapple-Jalapeño Margarita",
#   description: "No margarita is complete without fresh-squeezed lime juice—there’s something about the sour punch of citrus that goes so well with the smokiness of tequila. To stir things up, try adding pineapple juice to the mix and muddling in some jalapeño peppers for a little heat.",
#   steps: "Pour the lime juice and jalapeños into a shaker and muddle with the back of a wood spoon. Fill with ice. Pour in tequila, pineapple juice, and Grand Marnier. Shake until chilled. Dip the rim of a rocks glass in water, then dip it in coarse salt. Fill the glass with ice, and strain the cocktail into the glass. Garnish with pineapple wedge and peel and jalapeño slices.",
#   source: "http://www.architecturaldigest.com/gallery/4-easy-entertaining-summer-cocktail-recipes-5-ingredients-or-less"
# )
# margarita.ingredients.create(description: "½ oz. fresh lime juice")
# margarita.ingredients.create(description: "⅓ of a large jalapeño, sliced, plus more for garnish")
# margarita.ingredients.create(description: "1¾ oz. tequila")
# margarita.ingredients.create(description: "1½ oz. fresh pineapple juice")
# margarita.ingredients.create(description: "½ oz. Grand Marnier or other orange liqueur")
# margarita.ingredients.create(description: "Coarse salt, for rimming glass")
# margarita.ingredients.create(description: "Pineapple wedge and peel, for garnish")
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

prof1 = Professional.create(
  name: "Mohsin Rizvi",
  title: "Developer",
  company: "JumboCode",
  education: "Tufts",
)

prof2 = Professional.create(
  name: "Dan Cetlin",
  title: "Project Manager",
  company: "JumboCode",
  education: "Tufts",
)

prof3 = Professional.create(
  name: "Caroline Kaufman",
  title: "Project Manager",
  company: "JumboCode",
  education: "Tufts",
)

tsm1 = Testimonial.create(
  title: "Testimonial 1",
  content: "Hi!",
  professional_id: 1,
)

tsm2 = Testimonial.create(
  title: "Testimonial 2",
  content: "Hi! Hi!",
  professional_id: 1,
)

tsm3 = Testimonial.create(
  title: "Testimonial 3",
  content: "Hi! Hi! Hi!",
  professional_id: 2,
)

tsm4 = Testimonial.create(
  title: "Testimonial 4",
  content: "Hi! Hi! Hi! Hi!",
  professional_id: 3,
)

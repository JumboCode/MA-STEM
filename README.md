# MA STEM
### A 2018-2019 JumboCode project led by Caroline Kaufman and Dan Cetlin

## Project Overview
We are working with the Central Massachussetts STEM Network, an affiliate of 
the Worcester Polytechnic Institute STEM Education Center, to build a web
application that allows students and adult learners to visualize careers in 
STEM fields and identify resources to help them build careers in STEM. The
application will make the resources of the ["Designing My Future"](https://www.wpi.edu/news/calendar/events/designing-my-future-stem-career-expo-families-and-students-worcester) STEM career expo available and accessible for families
whether or not they were able to attend the in person event. This project
aims to help students identify steps they can take toward a STEM career that
are tailored to their location and interests.

## Team Members
Noah Adler  
Mohsin Rizvi  
Peter Lam  
Will Rusk  
Rebecca Glass (Designer)  
Emily Tran  
Ben London  
Eva Denman  
Amina Dieng  

## Technology Stack
React.js  
Ruby on Rails API  
PostgreSQL  


## Getting started:

First, make sure you have homebrew installed: `brew doctor`. If you see `Your system is ready to brew.` you’re good to go!

```
# install ruby
brew install rbenv ruby-build
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile
rbenv install 2.5.1
rbenv global 2.5.1
ruby -v

# install rails
gem install rails -v 5.2.0
rbenv rehash
rails -v

# install postgres
brew install sqlite3
brew install postgresql
brew services start postgresql
		
# clone the repo
git clone https://github.com/JumboCode/MA-STEM.git

# install the gems
bundle install

# create the database and run migrations
bundle exec rake db:create
bin/rails db:migrate RAILS_ENV=development

# install front-end stack
brew install node
npm i
```
## Rails API: Current Working Routes
`/resources`: returns JSON data containing all Resource objects in the database. 

`/professionalpaths`: GET request that returns JSON data containing all Professionalpath objects in the database.

	`/professionalpaths/create`: POST request that creates a new entry in the database. Takes four parameters,
	all of which are mandatory to create the entry: "name", "title", "description", and "contact". Returns
	status code 200 if successful.

	`/professionalpaths/delete`: POST request that deletes an entry from the database. Takes one mandatory 
	parameter: "id", which is the id of the database entry to be deleted. Returns status code 200 if 
	successful or 404 if the entry with the given id is not found.

	`/professionalpaths/update`: POST request that updates an entry in the database. It takes one mandatory
	parameter, "id", which is the id of the database entry to be updated, and four optional parameters,
	"name", "title", "description", and "contact", which, if given, will update their respective fields
	in the entry. Returns status code 200 if successful or 404 if the entry with the given id is not found.

Note -- you'll need to seed the database to be able to see these come back! Run `rake db:seed` to seed the database, then `rails server` to start the server. If you hit `localhost:3000/resources` you should see the JSON response!

## Additional Documentation
Please visit the [wiki](https://github.com/JumboCode/MA-STEM/wiki) for additional documentation on developing for this project.

## Team Logistics
MA STEM meets on Thursday evenings 8:00-10:00pm in SEC 120, and Saturday afternoons 2:00-4:00pm in SEC 223. 

## Project Timeline and Goals
October 6: have some initial wireframing done, have a solid understanding
of what the data will look like and how we want to store/model it, every team
member should have a development ticket  

October 14: complete static site pages/templates, database schema, route to
return all resources  

November 1: complete the student user UI -- the "build your path to STEM"
feature should produce a result that the student can view, start thinking
about admin user interaction  

Thanksgiving: a student user can (easily) build and save their personalized
path to STEM, an admin user can add new rows to the database and delete old 
ones. Static/templated pages complete.  

End of semester: application v0: admin user can easily interact with the content
of the website and update data with as much flexibility as we 
can reasonably offer, nice user flow through interactive components, clear
interactions, application displays all information requested by client.  

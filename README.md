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


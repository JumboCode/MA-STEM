Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :resources
	
	get '/resources/location/:location', to: 'resources#showLocation'	
	get '/resources/id/:id', to: 'resources#show'
	get '/resources/rtype/:r_type', to: 'resources#showr_type'

  post '/resources/new', to: 'resources#create'

  patch '/resources/id/:id', to: 'resources#update'
	# get "/404" => "errors#not_found"
	# get "/500" => "errors#exception"

  resources :careers
  get '/careers/id/:id', to: 'careers#show'
  get '/careers/interestid/:id', to: 'careers#showByInterest'

  post '/careers/new', to: 'careers#new'

  patch '/careers/id/:id', to: 'careers#update'


  resources :professionalpaths


  scope '/api' do

  end
end

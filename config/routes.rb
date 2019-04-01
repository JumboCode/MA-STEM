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


  get  '/professionalpaths',        to: 'professionalpaths#index'
  post '/professionalpaths/create', to: 'professionalpaths#new'
  post '/professionalpaths/delete', to: 'professionalpaths#destroy'
  post '/professionalpaths/update', to: 'professionalpaths#update'


  get '/professionals', to: 'professional#index'

  scope '/api' do

  end
end

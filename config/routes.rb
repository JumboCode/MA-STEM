Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
      	resources :resources
	get '/resources/:id', to: 'resources#show'
	
	# get "/404" => "errors#not_found"
	# get "/500" => "errors#exception"


  get  '/professionalpaths', to: 'professionalpaths#index'
  post '/professionalpaths/create', to: 'professionalpaths#new'

  scope '/api' do

  end
end

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
      	resources :resources
	get '/resources/:id', to: 'resources#show'


   scope '/api' do
  end
end

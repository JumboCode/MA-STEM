Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  resources :resources
  professionalPaths :professionalPaths

  scope '/api' do
  end
end

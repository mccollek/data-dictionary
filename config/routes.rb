Rails.application.routes.draw do
  resources :data_elements
  resources :data_sets
  resources :data_archetypes
  resources :data_sources
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

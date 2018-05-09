Rails.application.routes.draw do
  root 'map#index'
  get 'map/index'

  resources :data_sets do
    resources :data_elements
  end
  resources :data_archetypes do
    resources :data_sets do
      resources :data_elements
    end
  end
  resources :data_sources do
    resources :data_sets do
      resources :data_elements
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

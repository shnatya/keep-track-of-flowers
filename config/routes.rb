Rails.application.routes.draw do

  get "locations", to: "locations#index"

  post "create-planting-operations", to: "planting_operations#create"
  get "planting-operations", to: "planting_operations#index"
  delete "delete-planting-operation/:id", to: "planting_operations#destroy"

  get 'flowers', to: 'flowers#index'
  post 'add-new-flower', to: 'flowers#create'
  patch 'update-flower/:id', to: 'flowers#update'
  delete 'delete-flower/:id', to: 'flowers#destroy'

  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'me', to: 'users#show'
  post 'signup', to: 'users#create'

  get '*path', to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end


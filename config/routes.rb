Rails.application.routes.draw do

  get "/locations", to: "locations#index"
  post "/locations", to: "locations#create"
  delete "/locations/:id", to: "locations#destroy"

  get "/users/:id/planting-operations", to: "planting_operations#index"
  post "/planting_operations", to: "planting_operations#create"
  delete "/planting_operation/:id", to: "planting_operations#destroy"

  get '/flowers', to: 'flowers#index'
  post '/flowers', to: 'flowers#create'
  patch '/flowers/:id', to: 'flowers#update'
  delete '/flowers/:id', to: 'flowers#destroy'
  get '/users/:id/flowers/summary', to: 'flowers#summary'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  get '*path', to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end


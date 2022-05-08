Rails.application.routes.draw do
  resources :planting_operations
  resources :locations
  resources :flower_orders
  resources :flowers
  resources :users

  get '/myorders', to: 'flower_orders#index'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  get '/hello', to: 'application#hello_world'
  get '*path', to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

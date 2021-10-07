Rails.application.routes.draw do
  resources :users, only:[:index]
  resources :cards

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"











  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/hello", to: "application#hello_world"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

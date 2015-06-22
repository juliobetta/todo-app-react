Rails.application.routes.draw do
  resource :todos

  root to: 'todos#index'
end

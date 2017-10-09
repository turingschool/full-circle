Rails.application.routes.draw do
  root 'homepage#index'

  get '/auth/github/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  namespace :admin do
    get '/dashboard', to: 'dashboard#index'
  end

  namespace :reviewer do
    get '/dashboard', to: 'dashboard#index'
  end

  namespace :student do
    get '/dashboard', to: 'dashboard#index'
  end

  namespace :api do
    namespace :v1 do
      namespace :admin do
        resources :applications, only: [:index]
        resources :cohort do
          resources :reviewers, except: [:new, :create, :edit], controller: 'cohort_reviewers'
        end
      end

      namespace :student do
        resources :applications, only: [:index, :create]
        resource :applications, only: [:update]
        resource :users, only: [:update]
      end
    end
  end
end
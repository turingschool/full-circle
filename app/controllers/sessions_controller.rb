class SessionsController < ApplicationController

  def create
    user = User.find_or_create_by_oauth(oauth_params)

    if user
      session[:user_id] = user.id
      redirect_user
    else
      redirect_to homepage_path
    end

  end

  private

    def oauth_params
      request.env['omniauth.auth']
    end
end
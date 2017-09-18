class SessionsController < ApplicationController

  def create
    user = User.find_or_create_by_oauth(oauth_params)

    if user
      session[:user_id] = user.id
      redirect_user
    else
      redirect_to root_path
    end

  end

  def destroy
    reset_session
    redirect_to root_path
  end

  private

    def oauth_params
      request.env['omniauth.auth']
    end
end
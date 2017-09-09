class SessionsController < ApplicationController

  def create

    @user = User.find_or_create_by_oauth(oauth_params)

    redirect_to root_path
  end

  private

    def oauth_params
      request.env['omniauth.auth']
    end

end
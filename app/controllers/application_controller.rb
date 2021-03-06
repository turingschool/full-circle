class ApplicationController < ActionController::Base
  include Authorize

  before_action do
    if current_user
      Honeybadger.context({
        user_id: current_user.id,
        user_email: current_user.email
      })
    end
  end

  protect_from_forgery with: :exception
  helper_method :current_user

  private

    def current_user
      @current_user ||= (User.find(session[:user_id]) if session[:user_id])
    end
end

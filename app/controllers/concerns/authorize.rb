module Authorize
  extend ActiveSupport::Concern

  protected

    def redirect_user

      if @user.admin?
        redirect_to admin_dashboard
      elsif @user.reviewer?
        redirect_to reviewer_dashboard
      else
        redirect_to application_dashboard
      end
    end
end
module Authorize
  extend ActiveSupport::Concern

  protected

    def redirect_user
      if @user.admin?
        redirect_to admin_dashboard_path
      elsif @user.reviewer?
        redirect_to reviewer_dashboard_path
      else
        redirect_to application_dashboard_path
      end
    end

end
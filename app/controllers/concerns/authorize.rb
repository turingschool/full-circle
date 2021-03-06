module Authorize
  extend ActiveSupport::Concern

  def redirect_user
    if current_user.student?
      redirect_to student_dashboard_path
    elsif current_user.reviewer?
      redirect_to reviewer_dashboard_path
    elsif current_user.admin?
      redirect_to admin_dashboard_path
    end
  end

  def authorize_student!
    redirect_to root_path and return unless current_user
  end

  def authorize_reviewer!
    if current_user
      if !current_user.admin? && !current_user.reviewer?
        render file: "/public/404"
      end
    else
      redirect_to root_path unless current_user
    end
  end

  def authorize_admin!
    if current_user
      if !current_user.admin?
        render file: "/public/404"
      end
    else
      redirect_to root_path unless current_user
    end
  end

end

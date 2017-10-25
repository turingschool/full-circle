module Authorize
  extend ActiveSupport::Concern

  def redirect_user
    if student?
      redirect_to student_dashboard_path
    elsif current_user.reviewer?
      redirect_to reviewer_dashboard_path
    elsif admin?
      redirect_to admin_dashboard_path
    end
  end

  def admin?
    current_user.admin?
  end

  def reviewer?
    current_user.reviewer?
  end

  def student?
    current_user.student?
  end
end

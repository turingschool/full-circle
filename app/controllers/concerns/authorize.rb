module Authorize
  extend ActiveSupport::Concern

  def jwt_encode(payload, ttl_in_minutes = 60 * 24 * 30)
    payload[:exp] = ttl_in_minutes.minutes.from_now.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def jwt_decode(token, leeway = nil)
    decoded = JWT.decode(token, Rails.application.secrets.secret_key_base, leeway: leeway)
    HashWithIndifferentAccess.new(decoded[0])
  end

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
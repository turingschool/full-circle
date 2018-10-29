class Student::DashboardController < ApplicationController
  before_action :authorize_student!

  def index
    @cohort = Cohort.current[0]
    @user = current_user
    @application = get_application

    @authorization = JwToken.encode({user_id: current_user.id})
  end

  def get_application
    if @cohort && @user.application
      @cohort.applications.find(@user.application.id) || false
    else
      false
    end
  end

end

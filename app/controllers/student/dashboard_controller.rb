class Student::DashboardController < ApplicationController

  def index
    @current_cohort = Cohort.current[0]
    @user = current_user

    if @user.application && @current_cohort.applications.find(@user.application.id)
      @application = @current_cohort.applications.find(@user.application.id)
    else
      @application = false
    end

    @authorization = JwToken.encode({user_id: current_user.id})
  end

end
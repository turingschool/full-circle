class Student::DashboardController < ApplicationController

  def index
    @cohort = Cohort.current[0]
    @user = current_user

    if @user.application && @cohort.applications.find(@user.application.id)
      @application = @cohort.applications.find(@user.application.id)
    else
      @application = false
    end

    @authorization = JwToken.encode({user_id: current_user.id})
  end

end
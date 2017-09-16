class Student::DashboardController < ApplicationController

  def index
    @current_cohort = Cohort.current[0]
    @student = current_user

    if @student.application && @current_cohort.applications.find(@student.application.id)
      @application = @current_cohort.applications.find(@student.application.id)
    else
      @application = false
    end

    @authorization = JwToken.encode({user_id: current_user.id})
  end

end
class Admin::DashboardController < Admin::BaseController

  def index
    @cohorts = Cohort.all.to_json(:include => [:applications, :reviewers])
    @user = current_user
  end

end
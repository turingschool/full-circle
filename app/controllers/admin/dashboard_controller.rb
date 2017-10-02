class Admin::DashboardController < AdminController

  def index
    @closed_cohorts = Cohort.closed.to_json(:include => [:applications, :reviewers])
    @current_cohort = Cohort.current[0].to_json(:include => [:applications, :reviewers])

    @users = User.all.to_json

    @user = current_user
    @authorization = JwToken.encode({user_id: current_user.id})
  end

end
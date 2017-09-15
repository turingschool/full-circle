class Admin::DashboardController < Admin::BaseController

  def index
    @cohorts = Cohort.all.to_json(:include => [:applications, :reviewers])
    @user_id = JwToken.encode({user: current_user.id})
  end

end
class Reviewer::DashboardController < Reviewer::BaseController

  def index
    @cohorts = Cohort.all.to_json(:include => [:applications])
    @current_cohort = Cohort.current[0].to_json(:include => [:applications])
    @user = current_user
    @authorization = JwToken.encode({user_id: current_user.id})
  end

end
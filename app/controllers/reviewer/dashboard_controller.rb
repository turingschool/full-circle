class Reviewer::DashboardController < Reviewer::BaseController

  def index
    @cohorts = current_user.cohorts.to_json(:include => [{:applications => {:include => [:reviews]}}])
    @current_cohort = Cohort.current[0].to_json(:include => [{:applications => {:include => [:reviews]}}])
    @user = current_user.to_json(:include => [:cohort_reviewers])
    @authorization = JwToken.encode({user_id: current_user.id})
  end

end
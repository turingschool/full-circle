class Reviewer::DashboardController < Reviewer::BaseController

  def index
    # TODO(srt32): add serialization layer here
    @cohorts = current_user.cohorts.to_json(:include => [{:applications => {:include => [:reviews]}}])
    @current_cohort = Cohort.current.first.to_json(:include => [{:applications => {:include => [:reviews]}}])
    @user = current_user.to_json(:include => [:cohort_reviewers => {:include => [:reviews]}])
    @authorization = JwToken.encode({user_id: current_user.id})
  end

end

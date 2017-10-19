class Admin::DashboardController < AdminController

  def index
    @cohorts = Cohort.all.to_json(:include => [:applications => {:include => :user}, :reviewers])

    @users = User.all.to_json

    @user = current_user
    @authorization = JwToken.encode({user_id: current_user.id})
  end

end
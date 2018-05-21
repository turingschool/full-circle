class Admin::DashboardController < AdminController

  def index
    @cohorts = Cohort.all.to_json(:include => [{:applications => {:include => [:user, :reviews]}}, :reviewers, :non_reviewers, :applications_by_state_and_id => {:include => [:user, :reviews]}], methods: [:formatted_close_date, :formatted_start_date, :formatted_notify_date])
    @users = User.all.to_json
    @user = current_user
    @authorization = JwToken.encode({user_id: current_user.id})
  end

end

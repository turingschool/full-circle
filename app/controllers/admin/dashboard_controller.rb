class Admin::DashboardController < AdminController

  def index
    @cohorts = Cohort.all.to_json(:include => [{:applications => {:include => [:user, :reviews => {:include => [:cohort_reviewer => {:include => :user}]}]}}, :reviewers, :non_reviewers], methods: [:formatted_close_date, :formatted_start_date, :formatted_notify_date])
    @users = User.all.to_json
    @user = current_user
    @authorization = JwToken.encode({user_id: current_user.id})
  end

end

class Admin::DashboardController < Admin::BaseController

  def index
    @cohorts = Cohort.all
  end

end
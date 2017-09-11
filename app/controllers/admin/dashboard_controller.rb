class Admin::DashboardController < Admin::BaseController

  def index
    @cohorts = Cohort.all.to_json(:include => :applications)
  end

end
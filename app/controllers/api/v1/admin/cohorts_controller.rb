class Api::V1::Admin::CohortsController < Api::V1::AdminApiController

  def index
  end

  def create
    cohort = Cohort.create(cohort_params)

    if cohort.valid?
      render json: cohort, status: 200
    else
      render json: { "error"=>"Error Creating Cohort" }, status: 400
    end
  end

  private
    def cohort_params
      params.require(:cohort)
        .permit(:title, :start_date, :end_date, :open_date, :close_date)
    end
end
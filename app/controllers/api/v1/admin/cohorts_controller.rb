class Api::V1::Admin::CohortsController < Api::V1::AdminApiController

  def index
    render json: Cohort.all, status: 200
  end

  def show
    render json: Cohort.find(params[:id]), status: 200
  end

  def create
    cohort = Cohort.create(cohort_params)

    if cohort.valid?
      render json: cohort, status: 200
    else
      render json: { "error"=>"Error Creating Cohort" }, status: 400
    end
  end

  def update
    cohort = Cohort.find(params[:id])

    if cohort.update(cohort_params)
      render json: cohort, status: 200
    else
      render json: { "error"=>"Error Updating Cohort" }, status: 400
    end
  end

  def delete
    cohort = Cohort.find(params[:id])

    if cohort.destroy
      render json: cohort, status: 200
    else
      render json: { "error"=>"Error Deleting Cohort" }, status: 400
    end
  end

  private
    def cohort_params
      params.require(:cohort)
        .permit(:title, :start_date, :end_date, :open_date, :close_date)
    end
end
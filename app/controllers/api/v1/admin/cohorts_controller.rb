class Api::V1::Admin::CohortsController < Api::V1::AdminApiController

  def index
    render json: Cohort.all.map { |cohort| CohortSerializer.new(cohort).to_json }, status: 200
  end

  def show
    render json: CohortSerializer.new(Cohort.find(params[:id])).to_json, status: 200
  end

  def create
    cohort = Cohort.create(cohort_params)

    if cohort.valid?
      render json: cohort, :include => [:applications, :reviewers], status: 200
    else
      render json: { "error"=>"Error Creating Cohort" }, status: 400
    end
  end

  def update
    cohort = Cohort.find(params[:id])

    if cohort.update(cohort_params)
      render json: cohort, :include => [:applications, :reviewers], status: 200
    else
      render json: { "error"=>"Error Updating Cohort" }, status: 400
    end
  end

  def destroy
    cohort = Cohort.find(params[:id])

    if cohort.destroy
      render json: cohort, :include => [:applications, :reviewers], status: 200
    else
      render json: { "error"=>"Error Deleting Cohort" }, status: 400
    end
  end

  private
    def cohort_params
      params.require(:cohort)
        .permit(:title, :start_date, :end_date, :open_date, :close_date, :notify_date)
    end
end

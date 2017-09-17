class Api::V1::Student::ApplicationsController < Api::V1::ApiController
  before_action :authorize_requester

  def index
    render json: current_requester.application
  end

  def create
    cohort = Cohort.find(params[:cohort_id])
    application = Application.new(cohort: cohort, user: current_requester)

    if application.save
      render json: application
    else
      render json: { "error"=>"Error Creating Application" }, status: 400
    end
  end

  def update
    application = current_requester.application

    if application.update(application_params)
      render json: application, status: 200
    else
      render json: { "error"=>"Error Updating Application" }, status: 400
    end
  end

  private

    def application_params
      params.require(:application).permit(:essay)
    end

    def authorize_requester
      current_requester
    end
end
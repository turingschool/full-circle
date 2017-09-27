class Api::V1::Student::ApplicationsController < Api::V1::ApiController

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
      params.require(:application).permit(:essay, :state)
    end

    def user_params
      params.require(:user).permit(:alt_name, :alt_email)
    end
end
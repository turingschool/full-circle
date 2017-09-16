class Api::V1::Student::ApplicationsController < ApiController
  before_action :authorize_requester

  def index
    render json: current_requester.application
  end

  def create
    cohort = Cohort.find(params[:cohort_id])
    application = Application.new(cohort: cohort, user: current_requester)

    if application.save!
      render json: application
    else
      render json: { "error"=>"Error Creating Application" }, status: 400
    end

    rescue ActiveRecord::RecordNotFound
      render json: { "error"=>"Could Not Find Record" }, status: 400
  end

  def edit
  end

  private

    def authorize_requester
      current_requester

      rescue JWT::DecodeError
        render json: { "error"=>"Forbidden" }, status: 403
      rescue ActiveRecord::RecordNotFound
        render json: { "error"=>"Record Not Found" }, status: 404
    end
end
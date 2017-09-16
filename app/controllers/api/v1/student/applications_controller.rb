class Api::V1::Student::ApplicationsController < ApiController
  before_action :authorize_requester

  def index
    render json: current_requester.application
  end

  def create
    
  end

  def edit
  end

  private

    def authorize_requester
      current_requester

    rescue JWT::DecodeError
        render json: { status: 403, error: 'Forbidden' }
      rescue ActiveRecord::RecordNotFound
        render json: { status: 404, error: 'Record Not Found' }
    end
end
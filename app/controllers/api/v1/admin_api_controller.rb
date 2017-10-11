class Api::V1::AdminApiController < Api::V1::ApiController
  before_action :authorize_requester

  def authorize_requester
    render json: { "error"=>"Forbidden" }, status: 403 unless current_requester.admin?
  end
end
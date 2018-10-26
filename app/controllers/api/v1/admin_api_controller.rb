class Api::V1::AdminApiController < Api::V1::ApiController
  before_action :authorize_requester

  def authorize_requester
    unless current_requester.admin?
      Honeybadger.notify("Api::V1::AdminApiController - Forbidden")
      render json: { "error"=>"Api::V1::AdminApiController - Forbidden" }, status: 403
    end
  end
end

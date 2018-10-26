class Api::V1::ReviewerApiController < Api::V1::ApiController
  before_action :authorize_requester

  def authorize_requester
    unless current_requester.reviewer?
      Honeybadger.notify("Api::V1::ReviewerApiController - Forbidden")
      render json: { "error"=>"Api::V1::ReviewerApiController - Forbidden" }, status: 403
    end
  end
end

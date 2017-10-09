class Api::V1::Admin::ReviewersController < Api::V1::AdminApiController

  def index
    render json: User.reviewers, status: 200
  end
end
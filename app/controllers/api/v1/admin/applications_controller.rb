class Api::V1::Admin::ApplicationsController < Api::V1::AdminApiController

  def index
      render json: {
                      status: 200,
                      body: { Authorized:  current_requester.admin? }
                   }
  end

end
class Api::V1::Admin::ApplicationsController < ApiController
  before_action :authorize!

  def index
      render json: {
                      status: 200,
                      body: { Authorized:  current_user.admin? }
                   }
  end

  private

    def authorize!
      render json: { status: 401 } unless current_user.admin?
    end
end
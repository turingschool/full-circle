class Api::V1::Admin::ApplicationsController < ApiController

  def index

    if current_user.admin?
      render json: {'Authorized':  current_user.admin? }
    end
  end

end
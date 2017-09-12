class Api::V1::Admin::ApplicationsController < ApplicationController

  def index
    token = jwt_decode(request.env['HTTP_USER_TOKEN'])
    user = User.find(token["user_id"])

    if user && user.admin?
      render json: Application.all
    end
  end

end
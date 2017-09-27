class Api::V1::Student::UsersController < Api::V1::ApiController

  def update
    user = current_requester

    if user.update(user_params)
      render json: user, status: 200
    else
      render json: { "error"=>"Error Updating User" }, status: 400
    end
  end

  private

    def user_params
      params.require(:user).permit(:alt_name, :alt_email)
    end
end
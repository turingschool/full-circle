class Api::V1::Admin::ApplicationsController < Api::V1::AdminApiController

  def index
      render json: {
                      status: 200,
                      body: { Authorized:  current_requester.admin? }
                   }
  end

  def update
    application = Application.find(params[:id])

    if application.update(application_params)
      render json: application, :include => [:user, :reviews], status: 200
    else
      render json: { "error" => "Error Updating Application" }, status: 400
    end
  end

  private
    def application_params
      params.require(:application)
        .permit(:status)
    end
end

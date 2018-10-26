class Api::V1::Admin::ApplicationsController < Api::V1::AdminApiController

  def index
      render json: {
                      status: 200,
                      body: { Authorized:  current_requester.admin? }
                   }
  end

  def show
    application = Application.find(params[:id])
    render json: application, :include => [:user, :reviews => {:include => [:cohort_reviewer => {:include => :user}]}], status: 200
  end

  def update
    application = Application.find(params[:id])

    if application.update(application_params)
      if application_params[:status] && ['declined', 'awarded'].include?(application_params[:status])
        ApplicationStatusMailer.notify(application).deliver_now
      end
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

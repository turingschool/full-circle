class Api::V1::Admin::ApplicationsController < ApplicationController

  def index
    render json: Application.all
  end

end
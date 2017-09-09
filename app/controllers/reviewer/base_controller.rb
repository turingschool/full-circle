class Reviewer::BaseController < ApplicationController
  before_action :authorize!

  private

    def authorize!
      render file: "/public/404" unless admin? || reviewer?
    end
end
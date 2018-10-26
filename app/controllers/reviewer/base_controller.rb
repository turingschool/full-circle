class Reviewer::BaseController < ApplicationController
  before_action :authorize!

  private

    def authorize!
      unless admin? || reviewer?
        Honeybadger.notify("Reviewer::BaseController - Unauthorized")
        render file: "/public/404"
      end
    end
end

class AdminController < ApplicationController
  before_action :authorize!

  private

    def authorize!
      unless admin?
        Honeybadger.notify("Reviewer::AdminController - Unauthorized")
        render file: "/public/404"
      end
    end
end

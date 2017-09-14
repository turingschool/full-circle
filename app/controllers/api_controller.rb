class ApiController < ApplicationController
    helper_method :current_user

    private

      def parsed_user
        JSON.parse(jwt_decode(request.env['HTTP_USER'])[:user])
      end

      def current_user
        @current_user ||= User.find(parsed_user["id"])
      end
end
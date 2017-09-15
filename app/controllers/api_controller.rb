class ApiController < ActionController::API

    private

      def current_requester
        @current_user ||= User.find(JwToken.decode(request)["user_id"])
      end

      def request
        request.env['HTTP_AUTHORIZATION'].match(/^Bearer (.*)/)[1]
      end
end
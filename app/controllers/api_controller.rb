class ApiController < ActionController::API

    private

      def parsed_user
        user = request.env['HTTP_AUTHORIZATION'].match(/^Bearer (.*)/)[1]
        jwt_decode(user)[:user]
      end

      def current_user
        @current_user ||= User.find(parsed_user)
      end

      def jwt_decode(token)
        decoded = JWT.decode(token, Rails.application.secrets.secret_key_base)
        HashWithIndifferentAccess.new(decoded[0])
      end
end
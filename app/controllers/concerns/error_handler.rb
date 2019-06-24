module ErrorHandler
  extend ActiveSupport::Concern

  def self.included(base)

    base.class_eval do

      rescue_from ActiveRecord::RecordNotFound do |error|
        render json: { "error"=>"Record Not Found" }, status: 404
      end

      rescue_from JWT::DecodeError do |error|
        Honeybadger.notify("JWT::DecodeError", context: {error: error})
        render json: { "error"=>"JWT::DecodeError - Forbidden" }, status: 401
      end
    end
  end
end

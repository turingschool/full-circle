class JwToken

  class << self
    def encode(payload, experation = 3600)
      payload[:exp] = Time.now.to_i + experation
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

    def decode(token)
      JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
    end
  end
end
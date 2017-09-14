module OauthUser
  extend ActiveSupport::Concern

  def self.included(base)

    def base.oauth_params(params)
      {
        uid: params['uid'],
        token: params['credentials']['token'],
        name: params['info']['name'],
        email: params['info']['email']
      }
    end
  end
end
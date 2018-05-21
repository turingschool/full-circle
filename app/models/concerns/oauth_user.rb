module OauthUser
  extend ActiveSupport::Concern

  def self.included(base)
    def base.oauth_params(params)
      {
        uid: params['uid'],
        token: params['credentials']['token'],
        name: [params['info']['first_name'], params['info']['last_name']].join(" "),
        email: params['info']['email']
      }
    end
  end
end

module ManageUser
  extend ActiveSupport::Concern

  def self.included(base)

    def base.clean_params(params)
      {
        uid: params['uid'],
        token: params['credentials']['token'],
        name: params['info']['name'],
        email: params['info']['email']
      }
    end
  end
end
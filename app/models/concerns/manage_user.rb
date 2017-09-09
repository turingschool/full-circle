module ManageUser
  extend ActiveSupport::Concern

  def user_params(params)
    {
      github_id: params['uid'],
      github_token: params['credentials']['token'],
      name: params['info']['name'],
      email: params['info']['email']
    }
  end
end
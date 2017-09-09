class User < ApplicationRecord

  enum role: [:student, :reviewer, :admin]

  class << self

    def find_or_create_by_oauth(params)
      user_params = {
        github_id: params['uid'],
        github_token: params['credentials']['token'],
        name: params['info']['name'],
        email: params['info']['email']
      }

      user = User.find_or_create_by(github_id: user_params[:github_id])
      user.tap { |user| user.update!(user_params) }
    end
  end
end
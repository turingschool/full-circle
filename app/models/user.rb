class User < ApplicationRecord
  include ManageUser
  
  enum role: [:student, :reviewer, :admin]

  class << self

    def find_or_create_by_oauth(params)
      @params = params

      user = User.find_or_create_by(github_id: user_params[:github_id])
      user.tap { |user| user.update!(user_params) }
    end
  end

end
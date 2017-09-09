class User < ApplicationRecord
  include ManageUser

  enum role: [:student, :reviewer, :admin]

  class << self

    def find_or_create_by_oauth(params)
      user = User.find_or_create_by(uid: clean_params(params)[:uid])
      user.tap { |user| user.update!(clean_params(params)) }
    end
  end
end
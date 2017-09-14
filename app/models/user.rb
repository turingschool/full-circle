class User < ApplicationRecord
  include OauthUser

  has_one :application, dependent: :destroy

  has_many :cohort_reviewers, dependent: :destroy
  has_many :cohorts, through: :cohort_reviewers

  enum role: [:student, :reviewer, :admin]

  class << self

    def find_or_create_by_oauth(params)
      user = User.find_or_create_by(uid: oauth_params(params)[:uid])
      user.tap { |user| user.update!(oauth_params(params)) }
    end
  end
end
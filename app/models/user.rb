class User < ApplicationRecord
  include OauthUser

  has_one :application, dependent: :destroy

  has_many :cohort_reviewers, dependent: :destroy
  has_many :cohorts, through: :cohort_reviewers

  validates_uniqueness_of :uid

  enum role: [:student, :reviewer, :admin]

  def default_alts
    unless alt_name && alt_email
      self.alt_email = email
      self.alt_name = name
    end
  end

  class << self

    def find_or_create_by_oauth(params)
      user = User.find_or_create_by(uid: params['uid'])
      user.tap do |user|
        user.update!(oauth_params(params))
        user.default_alts
        user.save
      end
    end
  end
end
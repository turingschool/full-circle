class User < ApplicationRecord
  include OauthUser

  has_one :application, dependent: :destroy

  has_many :cohort_reviewers, dependent: :destroy
  has_many :cohorts, through: :cohort_reviewers

  validates_uniqueness_of :uid
  validates_presence_of :alt_name, :alt_email, on: :update
  validates_format_of :alt_email, :with => /\A@/, on: :update

  before_create :set_default_alts

  enum role: [:student, :reviewer, :admin]

  def set_default_alts
    self.alt_email = email
    self.alt_name = name
  end

  class << self

    def find_or_create_by_oauth(params)
      user = User.find_or_initialize_by(uid: params['uid'])
      user.tap do |user|
        user.update!(oauth_params(params))
      end
    end
  end
end
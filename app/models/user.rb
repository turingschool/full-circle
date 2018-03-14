class User < ApplicationRecord
  include OauthUser
  AUTH_PROVIDER_GITHUB = "github"

  has_one :application, dependent: :destroy

  has_many :cohort_reviewers, dependent: :destroy
  has_many :cohorts, through: :cohort_reviewers

  validates_uniqueness_of :uid, scope: :provider
  validates_presence_of :alt_name, :alt_email, on: :update

  before_create :set_default_alts

  enum role: [:student, :reviewer, :admin]

  def set_default_alts
    self.alt_email = email
    self.alt_name = name.blank? ? "n/a" : name
  end

  class << self

    def find_or_create_by_oauth(params)
      user = User.find_or_initialize_by(uid: params['uid'], provider: params['provider'])
      census_roles = (params['info']['roles'] || []).map { |role| role['name'] }

      user.role = 'student'
      user.role = 'reviewer' if census_roles.include?('staff')
      user.role = 'admin' if census_roles.include?('admin')

      user.tap do |user|
        user.update!(oauth_params(params))
      end
    end
  end
end

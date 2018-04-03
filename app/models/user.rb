class User < ApplicationRecord
  include OauthUser
  AUTH_PROVIDER_CENSUS = "census"
  AUTH_PROVIDER_GITHUB = "github"
  ROLE_ADMIN = :admin
  ROLE_NAME_EXTERNAL_ADMIN = "full-circle-admin"
  ROLE_NAME_EXTERNAL_REVIEWER = "full-circle-reviewer"
  ROLE_REVIWER = :reviewer
  ROLE_STUDENT = :student

  has_one :application, dependent: :destroy

  has_many :cohort_reviewers, dependent: :destroy
  has_many :cohorts, through: :cohort_reviewers

  validates_uniqueness_of :uid, scope: :provider
  validates_presence_of :alt_name, :alt_email, on: :update

  before_create :set_default_alts

  enum role: [ROLE_STUDENT, ROLE_REVIWER, ROLE_ADMIN]

  def set_default_alts
    self.alt_email = email
    self.alt_name = name.blank? ? "n/a" : name
  end

  class << self

    def find_or_create_by_oauth(params)
      user = User.find_or_initialize_by(uid: params['uid'], provider: params['provider'])
      census_roles = (params['info']['roles'] || []).map { |role| role['name'] }

      user.role = ROLE_STUDENT
      user.role = ROLE_REVIWER if census_roles.include?(ROLE_NAME_EXTERNAL_REVIEWER)
      user.role = ROLE_ADMIN if census_roles.include?(ROLE_NAME_EXTERNAL_ADMIN)

      user.tap do |user|
        user.update!(oauth_params(params))
      end
    end
  end
end

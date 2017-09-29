class Cohort < ApplicationRecord
  has_many :applications, dependent: :destroy

  has_many :cohort_reviewers, dependent: :destroy
  has_many :users, through: :cohort_reviewers

  has_one :config

  before_create :set_defaults

  enum state: ['unfinalized', 'finalized']

  scope :current, -> { where('start_date <= ? AND end_date >= ?', Date.today, Date.today) }

  def reviewers
    self.users.where(role: 'reviewer')
  end

  def students
    self.users.where(role: 'student')
  end

  def open?
    (start_date <= Date.today) && (end_date >= Date.today)
  end

  def css_status
    open? ? 'open' : 'closed'
  end

  private

    def set_defaults
      self.questions = Defaults.questions
      self.essay_limit = Defaults.essay_limit
      self.guidelines = Defaults.guidelines
    end
end
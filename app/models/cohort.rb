class Cohort < ApplicationRecord
  has_many :applications, dependent: :destroy

  has_many :cohort_reviewers, dependent: :destroy
  has_many :users, through: :cohort_reviewers

  enum state: ['unfinalized', 'finalized']

  scope :current, -> { where('open_date <= ? AND close_date >= ?', Date.today, Date.today) }
  scope :closed, -> { where('open_date > ? OR close_date < ?', Date.today, Date.today) }

  def reviewers
    self.users.where(role: 'reviewer')
  end

  def students
    self.users.where(role: 'student')
  end

  def open
    (open_date <= Date.today) && (close_date >= Date.today)
  end

  def guidelines
    Defaults.guidelines(self)
  end

  def questions
    Defaults.questions
  end

  def essay_limit
    Defaults.essay_limit
  end

end
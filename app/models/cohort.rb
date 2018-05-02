class Cohort < ApplicationRecord
  has_many :applications

  has_many :cohort_reviewers, dependent: :destroy
  has_many :users, through: :cohort_reviewers

  validates_presence_of :title

  enum state: ['unfinalized', 'finalized']

  default_scope { order("start_date DESC") }
  scope :current, -> { where('open_date <= ? AND close_date >= ?', Date.today, Date.today) }
  scope :closed, -> { where('open_date > ? OR close_date < ?', Date.today, Date.today) }

  def order_by_id_and_state
    applications.order('state DESC, id')
  end

  def reviewers
    users.where(role: 'reviewer')
  end

  def non_reviewers
    User.reviewer - reviewers
  end

  def students
    users.where(role: 'student')
  end

  def formatted_close_date
    close_date.strftime("%b %d, %Y")
  end

  def formatted_notify_date
    notify_date.strftime("%b %d, %Y")
  end

  def formatted_start_date
    start_date.strftime("%b %d, %Y")
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

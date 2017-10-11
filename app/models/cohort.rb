class Cohort < ApplicationRecord
  has_many :applications, dependent: :destroy

  has_many :cohort_reviewers, dependent: :destroy
  has_many :users, through: :cohort_reviewers

  validates_presence_of :title, :start_date, :end_date,
                        :open_date, :close_date, :notify_date

  before_save :set_dates

  enum state: ['unfinalized', 'finalized']

  scope :current, -> { where('open_date <= ? AND close_date >= ?', Date.today, Date.today) }
  scope :closed, -> { where('open_date > ? OR close_date < ?', Date.today, Date.today) }
  default_scope { order("start_date DESC") }

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

  private

    def set_dates
      self.start_date = Date.today unless start_date
      self.end_date = Date.today + 6.week unless end_date
      self.open_date = Date.today unless open_date
      self.close_date = Date.today + 4.week unless close_date
      self.notify_date = Date.today + 5.week unless notify_date
    end
end
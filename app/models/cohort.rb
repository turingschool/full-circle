class Cohort < ApplicationRecord
  has_many :applications

  has_many :cohort_reviewers, dependent: :destroy
  has_many :users, through: :cohort_reviewers

  enum state: ['unfinalized', 'finalized']

  def reviewers
    self.users.where(role: 'reviewer')
  end

  def open?
    (Date.today >= start_date) && (Date.today <= end_date)
  end

  def css_status
    open? ? 'open' : 'closed'
  end
end
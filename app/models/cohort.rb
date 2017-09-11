class Cohort < ApplicationRecord
  has_many :applications

  enum state: ['unfinalized', 'finalized']

  def open?
    (Date.today >= start_date) && (Date.today <= end_date)
  end

  def css_status
    open? ? 'open' : 'closed'
  end
end
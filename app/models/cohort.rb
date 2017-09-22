class Cohort < ApplicationRecord
  has_many :applications, dependent: :destroy

  has_many :cohort_reviewers, dependent: :destroy
  has_many :users, through: :cohort_reviewers

  before_create :add_questions

  enum state: ['unfinalized', 'finalized']

  scope :current, -> { where('start_date <= ? AND end_date >= ?', Date.today, Date.today) }

  def reviewers
    self.users.where(role: 'reviewer')
  end

  def open?
    (start_date <= Date.today) && (end_date >= Date.today)
  end

  def css_status
    open? ? 'open' : 'closed'
  end

  private

    def add_questions
      self.questions = [
        "1 - Tell us the story of how you became interested in a career in software development.",
        "2 - Share something you would be passionate about contributing to the world in the next five years.",
        "3 - Share a challenge/situation you have experienced that you believe was based on your status as a person in an underrepresented group and how you overcame that challenge or handled that situation.",
        "4 - Describe your financial barriers and how participation in this scholarship program could impact your ability to pursue education at Turing and a career in software development."
      ]
    end
end
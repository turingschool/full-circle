class Application < ApplicationRecord
  belongs_to :user
  belongs_to :cohort

  has_many :reviews
  has_many :cohort_reviewers, through: :reviews

  enum status: ['undecided', 'declined', 'awarded']
end
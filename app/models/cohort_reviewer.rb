class CohortReviewer < ApplicationRecord
  belongs_to :user
  belongs_to :cohort

  has_many :reviews
  has_many :applications, through: :reviews

  enum status: ['unfinalized', 'finalized']
end
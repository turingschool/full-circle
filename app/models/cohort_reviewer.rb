class CohortReviewer < ApplicationRecord
  belongs_to :user
  belongs_to :cohort

  enum status: ['unfinalized', 'finalized']
end
class Application < ApplicationRecord
  belongs_to :user
  belongs_to :cohort

  enum status: ['undecided', 'declined', 'awarded']
end
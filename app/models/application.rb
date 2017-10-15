class Application < ApplicationRecord
  belongs_to :user
  belongs_to :cohort

  has_many :reviews, dependent: :destroy
  has_many :cohort_reviewers, through: :reviews

  validates_length_of :essay, :minimum => 0, :allow_nil => false

  enum status: ['undecided', 'declined', 'awarded', 'invalid']
  enum state: ['draft', 'submitted']
end
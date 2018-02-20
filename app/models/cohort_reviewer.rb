class CohortReviewer < ApplicationRecord
  belongs_to :user
  belongs_to :cohort

  has_many :reviews, dependent: :destroy
  has_many :applications, through: :reviews

  enum status: ['unfinalized', 'finalized']
  
  after_create :create_reviews
  
  def create_reviews
    applications << cohort.applications
  end
end
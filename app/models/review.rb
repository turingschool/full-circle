class Review < ApplicationRecord
  belongs_to :application
  belongs_to :cohort_reviewer

  before_create :set_metrics

  enum status: ['unreviewed', 'reviewed']

  private

  def set_metrics
    self.metric = {"passion"=>0, "dedication"=>0, "need"=> 0}
  end

end
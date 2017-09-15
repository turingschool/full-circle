class Review < ApplicationRecord
  belongs_to :application
  belongs_to :cohort_reviewer

  before_create :set_metrics
  before_save :calculate_metrics, if: ->(obj){ obj.reviewed? }

  enum status: ['unreviewed', 'reviewed']

  private

  def set_metrics
    self.score_card = { "metrics" => [
                          { "name" => "passion",
                            "score" => 0 },
                          { "name" => "dedication",
                            "score" => 0 },
                          { "name" => "need",
                            "score" => 0 } ],
                        "total" => 0,
                        "average" => 0
                      }
  end

  private

  def calculate_metrics
    score_card["total"] = total
    score_card["average"] = average
  end

  def total
    score_card["metrics"].reduce(0) { |sum, metric| sum + metric["score"] }
  end

  def average
    (total.to_f / num_metrics).round(2)
  end

  def num_metrics
    score_card["metrics"].count
  end
end
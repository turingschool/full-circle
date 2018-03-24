class Review < ApplicationRecord
  belongs_to :application
  belongs_to :cohort_reviewer

  before_create :set_metrics
  before_save :calculate_metrics, unless: ->(obj){ obj.unreviewed? }
  
  enum status: ['unreviewed', 'reviewing', 'reviewed', 'locked']

  def score_metric(name, score)
    score_card['metrics'].each do |metric|
      metric["score"] = score if metric["name"] == name
    end
  end

  def metric(name)
    score_card["metrics"].find { |metric| metric["name"] == name }
  end

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
  
  { "metrics" => [{ "name" => "passion","score" => 9 },{ "name" => "dedication","score" => 4 },{ "name" => "need","score" => 8 } ],"total" => 21,"average" => 0}

  def calculate_metrics
    score_card["total"] = total
    score_card["average"] = average
  end

  def total
    score_card["metrics"].reduce(0) do |sum, metric| 
      sum + metric["score"]
    end
  end

  def average
    (total.to_f / num_metrics).round(2)
  end

  def num_metrics
    score_card["metrics"].count
  end
end
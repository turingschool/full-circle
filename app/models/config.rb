class Config < ApplicationRecord
  include ConfigDefaults

  belongs_to :cohort

  before_create :defaults

  def defaults
    binding.pry
    self.guidelines = guideline_template
  end
end
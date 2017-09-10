class Cohort < ApplicationRecord

  enum status: ['unfinalized', 'finalized']
end
require 'rails_helper'

RSpec.describe CohortReviewer do

  describe 'Associations' do
    it { should belong_to(:user) }
    it { should belong_to(:cohort) }
    it { should have_many(:reviews) }
    it { should have_many(:applications).through(:reviews) }
  end

  describe 'Status' do

    it 'Defaults to unfinalized' do
      cohort_reviewer = create(:cohort_reviewer)

      assert(cohort_reviewer.unfinalized?)
    end

    it 'Can be finalized' do
      cohort_reviewer = create(:cohort_reviewer)
      cohort_reviewer.finalized!

      assert(cohort_reviewer.finalized?)
    end
  end

end
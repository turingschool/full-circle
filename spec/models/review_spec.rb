require 'rails_helper'

RSpec.describe Review do

  describe 'Associations' do
    it { should belong_to(:application) }
    it { should belong_to(:cohort_reviewer) }
  end

  describe 'Metrics' do

    it 'Should all default to 0' do
      review = create(:review)

      expect(review.metric).to eq({"passion"=>0, "dedication"=>0, "need"=>0})
    end

    it 'Can be scored' do
      review = create(:review)

      review.metric["passion"] = 10
      review.metric["dedication"] = 10
      review.metric["need"] = 10

      expect(review.metric["passion"]).to eq(10)
      expect(review.metric["dedication"]).to eq(10)
      expect(review.metric["need"]).to eq(10)
    end
  end

  describe 'Status' do

    it 'Should default to unreviewed' do
      review = create(:review)

      assert(review.unreviewed?)
    end

    it 'Can be reviewed' do
      review = create(:review)
      review.reviewed!

      assert(review.reviewed?)
    end
  end
end
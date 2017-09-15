require 'rails_helper'

RSpec.describe Review do

  describe 'Associations' do
    it { should belong_to(:application) }
    it { should belong_to(:cohort_reviewer) }
  end

  describe 'Metrics' do

    it 'Should all default to 0' do
      review = create(:review)

      expect(review.score_card).to eq({ "metrics" => [
                                    { "name" => "passion",
                                      "score" => 0 },
                                    { "name" => "dedication",
                                      "score" => 0 },
                                    { "name" => "need",
                                      "score" => 0 } ],
                                  "total" => 0,
                                  "average" => 0
                                })
    end

    it 'Can be scored' do
      review = create(:review)

      review.score_card['metrics'].each do |metric|
        metric["value"] = 10
      end

      review.score_card['metrics'].each do |metric|
        expect(metric["value"]).to eq(10)
      end
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
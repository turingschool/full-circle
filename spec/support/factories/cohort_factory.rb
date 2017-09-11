FactoryGirl.define do

  factory :cohort do
    sequence :title do |i|
      '17' + i.to_s
    end
  end
end
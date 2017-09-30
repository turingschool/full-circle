FactoryGirl.define do

  factory :cohort do
    sequence :title do |i|
      '17' + i.to_s
    end

    trait :open do
      open_date Date.today - 1.days
      close_date Date.today + 30.days
    end

    trait :closed do
      open_date Date.today - 31.days
      close_date Date.today - 1.days
    end
  end
end
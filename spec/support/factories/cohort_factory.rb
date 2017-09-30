FactoryGirl.define do

  factory :cohort do
    sequence :title do |i|
      '17' + i.to_s
    end

    trait :open do
      open_date Date.today - 1.days
      close_date Date.today + 20.days
      start_date Date.today - 1.days
      end_date Date.today + 41.days
      notify_date Date.today + 30.days
    end

    trait :closed do
      open_date Date.today - 31.days
      close_date Date.today - 20.days
      start_date Date.today - 42.days
      end_date Date.today - 1.days
      notify_date Date.today - 10.days
    end
  end
end
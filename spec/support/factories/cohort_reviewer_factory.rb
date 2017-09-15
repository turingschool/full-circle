FactoryGirl.define do

  factory :cohort_reviewer do
    cohort
    user

    after(:build) { |object| object.user.reviewer! }
  end
end
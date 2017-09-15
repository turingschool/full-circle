FactoryGirl.define do

  factory :user do
    name 'John Galt'
    email 'somewhere@colorado.com'
    sequence :uid { |i| '90210' + i.to_s }
    token 'averysecrettoken'
  end

  trait :reviewer do

    after(:create) do |user|
      user.reviewer!
    end
  end

  trait :admin do

    after(:create) do |user|
      user.admin!
    end
  end

end
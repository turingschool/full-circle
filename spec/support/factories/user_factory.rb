FactoryGirl.define do

  factory :user do
    name 'John Galt'
    email 'somewhere@colorado.com'
    uid '90210'
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
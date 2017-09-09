FactoryGirl.define do

  factory :user do
    name 'John Galt'
    email 'somewhere@colorado.com'
    github_id '90210'
    github_token 'abc123'
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
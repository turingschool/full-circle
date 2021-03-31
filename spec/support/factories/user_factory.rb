FactoryBot.define do

  factory :user do
    name { 'John Galt' }
    email { 'somewhere@colorado.com' }
    sequence :uid do |i|
      '90210' + i.to_s
    end
    provider { User::AUTH_PROVIDER_GITHUB }
    token { 'averysecrettoken' }
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

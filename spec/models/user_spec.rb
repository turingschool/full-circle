require 'rails_helper'

RSpec.describe User do

  describe 'Associations' do
    it { should have_one(:application) }
    it { should have_many(:cohort_reviewers)}
    it { have_many(:cohorts).through(:cohort_reviewers)}
  end

  describe 'Validations' do
    it { should validate_uniqueness_of(:uid)}
    it { should validate_presence_of(:alt_name).on(:update)}
    it { should validate_presence_of(:alt_email).on(:update)}
  end

  describe 'Roles' do

    it 'Defaults to Student' do
      user = create(:user)

      assert(user.student?)
    end

    it 'Can be a Reviewer' do
      user = create(:user)

      user.reviewer!
      assert(user.reviewer?)
    end

    it 'Can be an Admin' do
      user = create(:user)

      user.admin!
      assert(user.admin?)
    end
  end

  describe 'OAuth Methods' do

    def oauth_params
      {
        'uid' => '90210',
        'credentials' => { 'token' => 'averysecrettoken' },
        'info' => {
          'name' => 'John Galt',
          'email' => 'somewhere@colorado.com'
        }
      }
    end

    it 'Can find user by oauth_params' do
      user = create(:user, uid: '90210')

      expect(User.find_or_create_by_oauth(oauth_params)).to eq(user)
    end

    it 'Can create a user by oauth_params' do
      user = User.find_or_create_by_oauth(oauth_params)

      expect(user.name).to eq('John Galt')
      expect(user.email).to eq('somewhere@colorado.com')
      expect(user.uid).to eq('90210')
    end

    it 'Will update a users attributes' do
      user = create(:user, name: 'Marky Mark',
                           email: 'mark.wahlberg@cool.com',
                           uid: '90210'
                    )

      updated_user = User.find_or_create_by_oauth(oauth_params)

      expect(updated_user).to eq(user)
      expect(updated_user.name).to eq('John Galt')
      expect(updated_user.email).to eq('somewhere@colorado.com')
    end
  end
end
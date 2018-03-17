require 'rails_helper'

RSpec.describe User do

  describe 'Associations' do
    it { should have_one(:application) }
    it { should have_many(:cohort_reviewers)}
    it { have_many(:cohorts).through(:cohort_reviewers)}
  end

  describe 'Validations' do
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
    describe 'with Census including roles' do
      def oauth_params(roles: ['student'])
        {
          'uid' => '90210',
          'credentials' => { 'token' => 'averysecrettoken' },
          'info' => {
            'name' => 'John Galt',
            'email' => 'somewhere@colorado.com',
            'roles' => roles.map { |role| { 'name' => role } }
          },
          'provider' => User::AUTH_PROVIDER_CENSUS
        }
      end

      context 'with a non admin or reviewer role' do
        it 'falls back to student role' do
          user = create(:user, uid: '90210')

          expect(
            User.find_or_create_by_oauth(oauth_params).role
          ).to eq(User::ROLE_STUDENT.to_s)
        end
      end

      context 'with an admin role' do
        it 'creates user with role of admin' do
          user = create(:user, uid: '90210')

          expect(
            User.find_or_create_by_oauth(oauth_params(roles: [User::ROLE_NAME_EXTERNAL_ADMIN])).role
          ).to eq(User::ROLE_ADMIN.to_s)
        end
      end

      context 'with a staff role' do
        it 'creates user with role of reviewer' do
          user = create(:user, uid: '90210')

          expect(
            User.find_or_create_by_oauth(oauth_params(roles: [User::ROLE_NAME_EXTERNAL_REVIEWER])).role
          ).to eq(User::ROLE_REVIWER.to_s)
        end
      end
    end

    describe 'with GitHub' do
      def oauth_params
        {
          'uid' => '90210',
          'credentials' => { 'token' => 'averysecrettoken' },
          'info' => {
            'name' => 'John Galt',
            'email' => 'somewhere@colorado.com'
          },
          'provider' => User::AUTH_PROVIDER_GITHUB
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

      it 'works with an empty name' do
        user = create(:user, name: '',
                             email: 'mark.wahlberg@cool.com',
                             uid: '90210'
                      )

        updated_user = User.find_or_create_by_oauth(oauth_params)

        expect(updated_user).to eq(user)
        expect(updated_user.name).to eq('John Galt')
        expect(updated_user.email).to eq('somewhere@colorado.com')
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
end

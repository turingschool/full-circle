require 'rails_helper'

RSpec.describe User do

  describe 'Associations' do
    it { should have_one(:application) }
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
end
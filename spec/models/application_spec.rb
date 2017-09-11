require 'rails_helper'

RSpec.describe Application do

  describe 'Associations' do
    it { should belong_to(:user) }
  end

  describe 'Status' do

    it 'Defaults to Undecided' do
      application = create(:application)

      assert(application.undecided?)
    end

    it 'Can be a Awarded' do
      application = create(:application)

      application.awarded!
      assert(application.awarded?)
    end

    it 'Can be a Declined' do
      application = create(:application)

      application.declined!
      assert(application.declined?)
    end
  end
end
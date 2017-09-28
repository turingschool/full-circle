require 'rails_helper'

RSpec.describe 'Student Application Decisions', js: true do
  OmniAuth.config.test_mode = true

  before do
    @user = create(:user)
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(@user)

    visit '/'
  end

  describe 'If there is no open cohort' do

    it 'A student cannot make an application' do
      click_on 'Login'

      expect(page).to have_content('Turing is Currently Not Accepting Diversity Scholorship Applications')
    end
  end

  describe 'If there is an open cohort' do
    before do
      @cohort = create(:cohort, :open)
    end

    describe 'And student has no application yet' do
      it 'They are asked to confirm open cohort' do
        click_on 'Login'

        expect(page).to have_content('Please confirm')
        expect(page).to have_content(@cohort.title)
      end
    end

    describe 'And they do have an application' do

      it 'They are shown application form' do
        application = create(:application, user: @user, cohort: @cohort)
        click_on 'Login'

        expect(page).to have_content("Application Deadline")
      end
    end
  end
end
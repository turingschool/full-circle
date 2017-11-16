require 'rails_helper'

RSpec.describe 'User can login' do
  OmniAuth.config.test_mode = true

  it 'Can see the login page', js: true do
    visit '/'

    expect(page).to have_content('Login')
    expect(page).to have_selector(:css, 'a[href="/auth/github"]')
  end

  describe 'Can Log in', js: true do
    before do
      @user = create(:user)
      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(@user)

      visit '/'
    end

    it 'Student will route to student/dashboard' do
      within ('header') do
        click_on 'Login'
      end

      expect(page).to have_current_path('/student/dashboard')
    end

    it 'Reviewer will route to reviewer/dashboard' do
      @user.reviewer!

      within ('header') do
        click_on 'Login'
      end
      expect(page).to have_current_path('/reviewer/dashboard')
    end

    it 'Admin will route to admin/dashboard' do
      @user.admin!

      within ('header') do
        click_on 'Login'
      end
      expect(page).to have_current_path('/admin/dashboard')
    end
  end

end
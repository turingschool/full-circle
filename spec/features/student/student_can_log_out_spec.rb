require 'rails_helper'

RSpec.describe 'Student can logout', js: true do
  OmniAuth.config.test_mode = true

  before do
    @user = create(:user)
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(@user)

    visit '/'
    click_on 'Login'
  end

  it 'and are redirected to homepage' do
    expect(page).to have_content('Log Out')

    click_on 'Log Out'
    expect(page).to have_current_path('/')
  end
end
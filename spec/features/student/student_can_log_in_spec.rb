require 'rails_helper'

RSpec.describe 'Student can login', js: true do
  OmniAuth.config.test_mode = true

  before do
    @user = create(:user)
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(@user)

    visit '/'
    click_on 'Login'
  end

  it 'and can see their github name' do
    expect(page).to have_content(@user.name)
  end
end
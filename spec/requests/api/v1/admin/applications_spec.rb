require 'rails_helper'

RSpec.describe 'API::V1::Admin::CohortController' do
  OmniAuth.config.test_mode = true

  before do
    @url = '/api/v1/admin/applications'
    @user = create(:user, :admin)

    @token = JwToken.encode({user_id: @user.id})
    @authorization = { 'HTTP_AUTHORIZATION' => "Bearer " + @token }
  end

  describe 'GET' do
    it 'Will return one application' do
      application = create(:application)

      get @url + '/' + application.id.to_s, headers: @authorization

      expect(response.status).to eq(200)
      raw_application = JSON.parse(response.body)

      expect(raw_application["id"]).to eq(application.id)
    end
  end

  describe 'PUT' do

    it 'Will update Application' do
      application = create(:application)

      put @url + '/' + application.id.to_s,
        params: {application: {status: 'awarded'} },
        headers: @authorization

      expect(ActionMailer::Base.deliveries.size).to eq(1)
      award_email = ActionMailer::Base.deliveries.last

      expect(response.status).to eq(200)
      raw_application = JSON.parse(response.body)

      expect(raw_application["status"]).to eq("awarded")
      expect(Application.last.status).to eq("awarded")

    end
  end

end

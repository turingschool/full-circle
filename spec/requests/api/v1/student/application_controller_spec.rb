require 'rails_helper'

RSpec.describe 'API::V1::Student::ApplicationController' do
  OmniAuth.config.test_mode = true

  before do
    @url = '/api/v1/student/applications'
    @user = create(:user)
    @cohort = create(:cohort, :open)
    @user.application = create(:application, cohort: @cohort)
  end

  describe 'Varification' do
    it 'Will return error if no record found' do
      token = JwToken.encode({user_id: 'Bam!'})
      get @url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + token }

      expect(JSON.parse(response.body)).to eq({"status"=>404, "error" => "Record Not Found"})
    end

    it 'Will return Forbidden if invalid token is sent' do
      get @url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + '1' }

      expect(JSON.parse(response.body)).to eq({"status"=>403, "error"=>"Forbidden"})
    end
  end

  describe 'GET' do
    it 'Will return the requesters application' do
      token = JwToken.encode({user_id: @user.id})

      get @url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + token }
      application = JSON.parse(response.body)

      expect(response).to be_success
      expect(application["user_id"]).to eq(@user.id)
      expect(application["id"]).to eq(@user.application.id)
    end
  end
end
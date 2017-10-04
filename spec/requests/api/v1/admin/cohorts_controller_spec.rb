require 'rails_helper'

RSpec.describe 'API::V1::Admin::CohortController' do
  OmniAuth.config.test_mode = true

  before do
    @url = '/api/v1/admin/cohorts'
    @user = create(:user, :admin)

    @token = JwToken.encode({user_id: @user.id})
    @authorization = { 'HTTP_AUTHORIZATION' => "Bearer " + @token }
  end

  describe 'Authentication' do
    it 'Will return error if no user found' do
      token = JwToken.encode({user_id: 'Bam!'})
      get @url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + token }

      expect(response.status).to eq(404)
      expect(JSON.parse(response.body)).to eq({ "error"=>"Record Not Found" })
    end

    it 'Will return Forbidden if invalid token is sent' do
      get @url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + '1' }

      expect(response.status).to eq(403)
      expect(JSON.parse(response.body)).to eq({ "error"=>"Forbidden" })
    end

    it 'Will return Forbidden if user not an admin' do
      user = create(:user)
      token = JwToken.encode({user_id: user.id})

      get @url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + token }

      expect(response.status).to eq(403)
      expect(JSON.parse(response.body)).to eq({ "error"=>"Forbidden" })
    end
  end

  xdescribe 'POST' do

    it 'Will return error if Cohort fails to create' do
      post @url, params: { title: "" }, headers: @authorization

      expect(response.status).to eq(400)
      error = JSON.parse(response.body)

      expect(error["error"]).to eq("Error Creating Cohort")
    end

    it 'Will create a Cohort' do
      post @url, params: {}, headers: @authorization

      expect(response.status).to eq(200)
      cohort = JSON.parse(response.body)

      expect(Cohort.last.id).to eq(cohort.id)
    end
  end

end
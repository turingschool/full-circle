require 'rails_helper'

RSpec.describe 'API::V1::Student::ApplicationController' do
  OmniAuth.config.test_mode = true

  before do
    @url = '/api/v1/student/applications'
    @user = create(:user)
    @cohort = create(:cohort, :open)
    @user.application = create(:application, cohort: @cohort)
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

      expect(response.status).to eq(401)
      expect(JSON.parse(response.body)).to eq({ "error"=>"JWT::DecodeError - Forbidden" })
    end
  end

  describe 'GET' do
    it 'Will return the requesters application' do
      get @url, headers: @authorization
      application = JSON.parse(response.body)

      expect(response).to be_successful
      expect(application["user_id"]).to eq(@user.id)
      expect(application["id"]).to eq(@user.application.id)
    end
  end

  describe 'POST' do

    it 'Will return error if Application fails to create' do
      allow_any_instance_of(Api::V1::ApiController).to receive(:current_requester).and_return(nil)

      post @url, params: { "cohort_id" => @cohort.id }, headers: @authorization

      expect(response.status).to eq(400)
      error = JSON.parse(response.body)

      expect(error["error"]).to eq("Error Creating Application")
    end

    it 'Will create an Application' do
      post @url, params: { "cohort_id" => @cohort.id }, headers: @authorization

      expect(response.status).to eq(201)
      application = JSON.parse(response.body)

      expect(application["user_id"]).to eq(@user.id)
      expect(application["cohort_id"]).to eq(@cohort.id)
    end
  end

  describe 'PUT' do

    it 'Will return error is application failed to update' do
      put @url,
        params: { application: { essay: nil } },
        headers: @authorization

      expect(response.status).to eq(400)
      error = JSON.parse(response.body)

      expect(error["error"]).to eq("Error Updating Application")
    end

    it 'Will update an Application' do
      put @url,
        params: { application: { essay: 'I changed the Essay!' } },
        headers: @authorization

      expect(response.status).to eq(200)
      application = JSON.parse(response.body)

      expect(application["essay"]).to eq("I changed the Essay!")
    end
  end
end

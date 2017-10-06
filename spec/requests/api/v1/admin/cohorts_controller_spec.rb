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

  describe 'GET' do

    it 'Will return all cohorts' do
      cohorts = create_list(:cohort, 10)

      get @url, headers: @authorization

      expect(response.status).to eq(200)
      raw_cohorts = JSON.parse(response.body)

      expect(raw_cohorts.count).to eq(10)
    end

    it 'Will return one cohort' do
      cohort = create(:cohort)

      get @url + '/' + cohort.id.to_s, headers: @authorization

      expect(response.status).to eq(200)
      raw_cohort = JSON.parse(response.body)

      expect(raw_cohort["id"]).to eq(cohort.id)
    end

  end

    it 'Will return error if Cohort fails to create' do
      post @url, params: { cohort: { title: "" } }, headers: @authorization

      expect(response.status).to eq(400)
      error = JSON.parse(response.body)

      expect(error["error"]).to eq("Error Creating Cohort")
    end

  describe 'POST' do

    it 'Will return error if Cohort fails to create' do
      post @url, params: { cohort: { title: "" } }, headers: @authorization

      expect(response.status).to eq(400)
      error = JSON.parse(response.body)

      expect(error["error"]).to eq("Error Creating Cohort")
    end

    it 'Will create a Cohort' do
      post @url, params: { cohort: { title: '1703'} }, headers: @authorization

      expect(response.status).to eq(200)
      cohort = JSON.parse(response.body)

      expect(Cohort.last.id).to eq(cohort["id"])
    end
  end

  describe 'PUT' do

    it 'Will return error Cohort fails to update' do
      cohort = create(:cohort)

      put @url + '/' + cohort.id.to_s,
        params: {cohort: {title: ''} },
        headers: @authorization

        expect(response.status).to eq(400)
        error = JSON.parse(response.body)

        expect(error["error"]).to eq('Error Updating Cohort')
    end

    it 'Will update cohort' do
      date = Date.today + 10.day
      cohort = create(:cohort)

      put @url + '/' + cohort.id.to_s,
        params: {cohort: {title: 'Hello!', start_date: date}},
        headers: @authorization

      expect(response.status).to eq(200)
      raw_cohort = JSON.parse(response.body)

      expect(raw_cohort["title"]).to eq("Hello!")
      expect(Cohort.last.title).to eq("Hello!")
    end

  end

end
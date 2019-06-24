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

      expect(response.status).to eq(401)
      expect(JSON.parse(response.body)).to eq({ "error"=>"JWT::DecodeError - Forbidden" })
    end

    it 'Will return Forbidden if user not an admin' do
      user = create(:user)
      token = JwToken.encode({user_id: user.id})

      get @url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + token }

      expect(response.status).to eq(403)
      expect(JSON.parse(response.body)).to eq({ "error"=>"Api::V1::AdminApiController - Forbidden" })
    end
  end

  describe 'GET' do

    it 'Will return all cohorts' do
      cohorts = create_list(:cohort, 10, :open)

      get @url, headers: @authorization

      expect(response.status).to eq(200)
      raw_cohorts = JSON.parse(response.body)

      expect(raw_cohorts.count).to eq(10)
    end

    it 'Will return one cohort' do
      cohort = create(:cohort, :open)

      get @url + '/' + cohort.id.to_s, headers: @authorization

      expect(response.status).to eq(200)
      raw_cohort = JSON.parse(response.body)

      expect(raw_cohort["id"]).to eq(cohort.id)
    end
  end

  describe 'POST' do

    def cohort_params
      { start_date: Date.today, end_date: Date.today,
        open_date: Date.today, close_date: Date.today,
        notify_date: Date.today }
    end

    it 'Will return error if Cohort fails to create' do
      post @url, params: { cohort: cohort_params.merge({ title: "" }) }, headers: @authorization

      expect(response.status).to eq(400)
      error = JSON.parse(response.body)

      expect(error["error"]).to eq("Error Creating Cohort")
    end

    it 'Will create a Cohort' do
      post @url, params: { cohort: cohort_params.merge({ title: 'Title' }) }, headers: @authorization

      expect(response.status).to eq(200)
      cohort = JSON.parse(response.body)

      expect(Cohort.last.id).to eq(cohort["id"])
    end
  end

  describe 'PUT' do

    it 'Will return error Cohort fails to update' do
      cohort = create(:cohort, :open)

      put @url + '/' + cohort.id.to_s,
        params: {cohort: {title: ''} },
        headers: @authorization

        expect(response.status).to eq(400)
        error = JSON.parse(response.body)

        expect(error["error"]).to eq('Error Updating Cohort')
    end

    it 'Will update cohort' do
      cohort = create(:cohort, :open)

      put @url + '/' + cohort.id.to_s,
        params: {cohort: {title: 'Hello!'}},
        headers: @authorization

      expect(response.status).to eq(200)
      raw_cohort = JSON.parse(response.body)

      expect(raw_cohort["title"]).to eq("Hello!")
      expect(Cohort.last.title).to eq("Hello!")
    end
  end

  describe 'DELET' do

    it 'Will delete a cohort' do
      cohort = create(:cohort, :open)

      delete @url + '/' + cohort.id.to_s,
        headers: @authorization

      expect(response.status).to eq(200)
      raw_cohort = JSON.parse(response.body)

      expect(raw_cohort["id"]).to eq(cohort.id)
      expect(Cohort.all).not_to include(cohort)
    end
  end
end

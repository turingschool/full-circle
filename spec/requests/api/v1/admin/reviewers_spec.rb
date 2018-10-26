require 'rails_helper'

RSpec.describe 'API::V1::Admin::ReviewersController' do
  OmniAuth.config.test_mode = true

  def url(cohort_id: @cohort.id, user_id: "")
    '/api/v1/admin/cohorts/' + cohort_id.to_s + '/reviewers/' + user_id.to_s
  end

  before do
    @user = create(:user, :admin)
    @reviewer = create(:user, :reviewer)
    @cohort = create(:cohort, :open)

    @token = JwToken.encode({user_id: @user.id})
    @authorization = { 'HTTP_AUTHORIZATION' => "Bearer " + @token }
  end

  describe 'Authentication' do
    it 'Will return error if no user found' do
      token = JwToken.encode({user_id: 'Bam!'})
      get url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + token }

      expect(response.status).to eq(404)
      expect(JSON.parse(response.body)).to eq({ "error"=>"Record Not Found" })
    end

    it 'Will return Forbidden if invalid token is sent' do
      get url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + '1' }

      expect(response.status).to eq(403)
      expect(JSON.parse(response.body)).to eq({ "error"=>"JWT::DecodeError - Forbidden" })
    end

    it 'Will return Forbidden if user not an admin' do
      user = create(:user)
      token = JwToken.encode({user_id: user.id})

      get url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + token }

      expect(response.status).to eq(403)
      expect(JSON.parse(response.body)).to eq({ "error"=>"Api::V1::AdminApiController - Forbidden" })
    end
  end

  describe 'GET' do

    it 'Will return all Cohort Reviewers' do
      reviewers = create_list(:cohort_reviewer, 10, cohort: @cohort)

      get url, headers: @authorization

      expect(response.status).to eq(200)
      raw_cohorts = JSON.parse(response.body)

      expect(raw_cohorts.count).to eq(10)
    end
  end

  describe 'PUT' do

    it 'Will update add to a Cohorts Reviewers' do
      reviewer = create(:user, :reviewer)
      expect(@cohort.reviewers.count).to eq(0)

      put url(user_id: reviewer.id), headers: @authorization

      expect(response.status).to eq(200)
      cohort_reviewer = JSON.parse(response.body)

      expect(@cohort.reviewers.count).to eq(1)
      expect(cohort_reviewer["id"]).to eq(reviewer.id)
    end
  end

  describe 'DELETE' do

    it 'Will delete a Cohort Reviewer' do
      reviewers = create_list(:cohort_reviewer, 10, cohort: @cohort)
      reviewer = @cohort.reviewers.sample

      delete url(user_id: reviewer.id),
        headers: @authorization

      expect(response.status).to eq(200)
      raw_reviewer = JSON.parse(response.body)

      expect(raw_reviewer["id"]).to eq(reviewer.id)
      expect(@cohort.reviewers).not_to include(reviewer)
    end
  end
end

require 'rails_helper'

RSpec.describe 'API::V1::Student::UserController' do
  OmniAuth.config.test_mode = true

  before do
    @url = '/api/v1/student/users'
    @user = create(:user)
    @cohort = create(:cohort, :open)
    @user.application = create(:application, cohort: @cohort)
    @token = JwToken.encode({user_id: @user.id})
    @authorization = { 'HTTP_AUTHORIZATION' => "Bearer " + @token }
  end

  describe 'Authentication' do
    it 'Will return error if no user found' do
      token = JwToken.encode({user_id: 'Bam!'})
      put @url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + token }

      expect(response.status).to eq(404)
      expect(JSON.parse(response.body)).to eq({ "error"=>"Record Not Found" })
    end

    it 'Will return Forbidden if invalid token is sent' do
      put @url, headers: { 'HTTP_AUTHORIZATION' => "Bearer " + '1' }

      expect(response.status).to eq(403)
      expect(JSON.parse(response.body)).to eq({ "error"=>"JWT::DecodeError - Forbidden" })
    end
  end

  describe 'PUT' do

    it 'Will return error is user failed to update' do
      put @url,
        params: { user: {
                    alt_name: nil,
                    alt_email: 'square.pants@gmail.com'
                  }
                },
        headers: @authorization

      expect(response.status).to eq(400)
      error = JSON.parse(response.body)

      expect(error).to eq(["Alt name can't be blank"])
    end

    it 'Will update a User' do
      put @url,
        params: { user: {
                    alt_name: 'Sponge Bob',
                    alt_email: 'square.pants@gmail.com'
                  }
                },
        headers: @authorization

      expect(response.status).to eq(200)
      user = JSON.parse(response.body)

      expect(user["alt_email"]).to eq("square.pants@gmail.com")
      expect(user["alt_name"]).to eq("Sponge Bob")
    end
  end
end

require 'rails_helper'

RSpec.describe JwToken do

  it 'Can only encode a hash' do
    user_id = create(:user).id
    expect { JwToken.encode(user_id) }.to raise_error(NoMethodError)
  end

  it 'Can encode and decode a User Id' do
    user_id = create(:user).id

    encoded_user_id = JwToken.encode({user_id: user_id})
    expect(encoded_user_id).not_to equal(user_id)

    decoded_user_id = JwToken.decode(encoded_user_id)
    expect(decoded_user_id["user_id"]).to equal(user_id)
  end

  it 'Will add an expiration date or 1 hour when encoding' do
    user_id = create(:user).id
    encoded_user_id = JwToken.encode({user_id: user_id})

    time = Time.now.to_i

    decoded_user_id = JwToken.decode(encoded_user_id)
    expect(decoded_user_id["exp"]).to be_within(1).of(time + 3600)
  end

end
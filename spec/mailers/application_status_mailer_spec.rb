require 'rails_helper'

RSpec.describe ApplicationStatusMailer do

  describe 'ApplicationMailer' do

    it 'sends award email' do
      application = create(:application)
      application.status = 'awarded'

      # Create the email and store it for further assertions
      email = ApplicationStatusMailer.notify(application)

      # Send the email, then test that it got queued
      assert_emails 1 do
        email.deliver_now
      end

      # Test the body of the sent email contains what we expect it to
      assert_equal ['contact@turing.io'], email.from
      assert_equal ['somewhere@colorado.com'], email.to
      assert_equal 'Congratulation', email.subject
    end

    it 'send declined email' do
      application = create(:application)
      application.status = 'declined'

      # Create the email and store it for further assertions
      email = ApplicationStatusMailer.notify(application)

      # Send the email, then test that it got queued
      assert_emails 1 do
        email.deliver_now
      end

      # Test the body of the sent email contains what we expect it to
      assert_equal ['contact@turing.io'], email.from
      assert_equal ['somewhere@colorado.com'], email.to
      assert_equal 'Diversity Scholarship', email.subject
    end
  end
end

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

      award_email_text = "Dear John Galt\n\nCongratulations! I'm writing to let you know that you have been selected as a scholarship recipient of our 171 Turing School of Software & Design Diversity Scholarship. You’ll soon receive a credit agreement through Right Signature reflecting the additional $4,000 tuition waiver.\n\nWe are looking forward to having you here at Turing next month, and we are excited to be part of this next stage in your journey.\n\nThank you for sharing your story with us. We hope this helps you achieve your dreams.\n\n"
      assert_equal award_email_text, email.text_part.body.to_s
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

      decline_email_text = "Dear John Galt\n\nI’d like to thank you for applying for the 171 Turing School of Software & Design Diversity Scholarship. I regret to inform you that you were not selected to receive an award.\n\nTuring School received many strong applications this round. We had a very difficult time selecting scholarship recipients for this cohort because of the passion and need of each candidate.\n\nWe are looking forward to having you here at Turing next month, and we are excited to be part of this next stage in your journey.\n\nThank you for sharing your story with us. We look forward to helping you achieve your dreams.\n\n"
      assert_equal decline_email_text, email.text_part.body.to_s
    end
  end
end

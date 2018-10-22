class ApplicationStatusMailerPreview < ActionMailer::Preview
  def award
    ApplicationStatusMailer.award(Application.last)
  end

  def decline
    ApplicationStatusMailer.decline(Application.last)
  end
end

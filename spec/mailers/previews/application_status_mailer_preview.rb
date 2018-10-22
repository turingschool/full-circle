class ApplicationStatusMailerPreview < ActionMailer::Preview
  def award
    ApplicationStatusMailer.notify(Application.where(status: 'awarded').last)
  end

  def decline
    ApplicationStatusMailer.notify(Application.where(status: 'declined').last)
  end
end

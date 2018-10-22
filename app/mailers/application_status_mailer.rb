class ApplicationStatusMailer < ApplicationMailer

  def award(application)
    @application = application

    mail(to: application.user.email, subject: 'Congratulation')
  end

  def decline(application)
    @application = application

    mail(to: application.user.email, subject: 'Diversity Scholarship')
  end
end

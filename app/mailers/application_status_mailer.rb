class ApplicationStatusMailer < ApplicationMailer

  def notify(application)
    @application = application

    if application.status == 'awarded'
      mail(to: application.user.email,
           subject: 'Congratulation',
           template_name: 'award')
    else
      mail(to: application.user.email,
           subject: 'Diversity Scholarship',
           template_name: 'decline')
    end
  end

end

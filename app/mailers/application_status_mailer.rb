class ApplicationStatusMailer < ApplicationMailer

  def notify(application)
    @application = application

    mail(
        to: @application.user.email,
        bcc: "darren@turing.io",
        subject: "Turing School Scholarship Application",
        template_name: application.status == 'awarded' ? "award" : "decline"
        )
  end

end

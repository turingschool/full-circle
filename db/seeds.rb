class Seed

  def run
    clean
    make_cohorts
    make_users
    make_applications
    populate_cohorts
    assign_reviewers
    score_applications
    puts "Done!"
  end

  def clean
    puts 'Cleaning'
    User.destroy_all
    Cohort.destroy_all
    Application.destroy_all
  end

  def make_cohorts
    puts 'Making Cohorts'
    @closed_cohorts = make_closed_cohorts
    @open_cohort = make_open_cohort
  end

  def make_users
    puts 'Makeing Users'
    @past_students = make_past_students
    puts "Made #{@past_students.length} Past Students"
    @current_students = make_current_students
    puts "Made #{@current_students.length} Current Students"
    @reviewers = make_reviewers
    puts "Made #{@reviewers.length} Reviewers"
  end

  def make_applications
    puts 'Making Applications'
    @past_applications = make_past_applications
    puts "Made #{@past_applications.length} Past Applications"
    @current_applications = make_current_applications
    puts "Made #{@current_applications.length} Current Applications"
  end

  def populate_cohorts
    puts 'Populating Cohorts'
    populate_closed_cohorts
    puts 'Populated Closed Cohorts'
    populate_open_cohort
    puts 'Open Closed Cohorts'
  end

  def assign_reviewers
    puts 'Assigning Past Reviewers'
    assign_past_reviewers
    puts 'Assigning Current Reviewers'
    assign_current_reviewers
  end

  def score_applications
    puts "Scoring Past Applications"
    score_past_applications
    puts "Awarding Past Applications"
    award_past_applications
  end

  ###

  def make_closed_cohorts
    10.times.map do |i|
      date = Date.today + (-6 - i).months

      Cohort.create(
        title: ('17' + i.to_s),
        open_date: date,
        close_date: date + 2.weeks,
        start_date: date,
        end_date: date + 4.weeks,
        notify_date: date + 3.weeks,
        state: 'finalized'
      )
    end
  end

  def make_open_cohort
    Cohort.create(
      title: '1801',
      open_date: Date.today - 1.day,
      close_date: Date.today + 2.weeks,
      start_date: Date.today - 1.day,
      end_date: Date.today + 4.weeks,
      notify_date: Date.today + 3.weeks
    )
  end

  def make_past_students
    80.times.map do |i|
      name = Faker::FamilyGuy.character
      email = name.gsub(' ', '.') + '@gmail.com'
      uid = (1234 + i).to_s
      token = (9876543 + i).to_s

      User.create(name: name, email: email, uid: uid, token: token)
    end
  end

  def make_current_students
    8.times.map do |i|
      name = Faker::HarryPotter.unique.character
      email = name.gsub(' ', '.') + '@gmail.com'
      uid = (12345 + i).to_s
      token = (98765432 + i).to_s

      User.create(name: name, email: email, uid: uid, token: token)
    end
  end

  def make_reviewers
    20.times.map do |i|
      name = Faker::Friends.character
      email = name.gsub(' ', '.') + '@gmail.com'
      uid = (123456 + i).to_s
      token = (987654321 + i).to_s

      User.create(name: name, email: email, uid: uid, token: token, role: 'reviewer')
    end
  end

  def make_past_applications
    @past_students.each.map do |student|
      app = make_application
      app.user = student
      app
    end
  end

  def make_current_applications
    @current_students.each.map do |student|
      app = make_application
      app.user = student
      app
    end
  end

  def make_application
    Application.new( essay: Faker::Lorem.paragraph(8, false) )
  end

  def populate_closed_cohorts
    @closed_cohorts.each_with_index do |cohort, i|
      chunk = i * 8
      @past_applications[chunk..chunk+7].each do |app|
        app.cohort = cohort
        app.save!
      end
    end
  end

  def populate_open_cohort
    @current_applications.each do |app|
      app.cohort = @open_cohort
      app.save!
    end
  end

  def assign_past_reviewers
    @closed_cohorts.each do |cohort|
      cohort.cohort_reviewers << 6.times.map do |i|
        CohortReviewer.create(
          user: @reviewers.sample,
          status: 'finalized'
        )
      end
    end
  end

  def assign_current_reviewers
    @open_cohort.cohort_reviewers << 6.times.map do |i|
      CohortReviewer.create(
        user: @reviewers.sample,
      )
    end
  end

  def score_past_applications
    @closed_cohorts.each do |cohort|
      cohort.cohort_reviewers.each do |cohort_reviewer|
        cohort_reviewer.applications << cohort.applications
        cohort_reviewer.reviews.each do |review|
          review.score_card["metrics"].each do |metric|
            metric["score"] = rand(1..10)
          end
          review.reviewed!
        end
      end
    end
  end

  def award_past_applications
    @closed_cohorts.each do |cohort|
      cohort.applications.each { |app| app.declined! }

      winning_apps = cohort.applications.sort_by do |app|
        app.reviews.reduce(0) { |sum, rev| sum + rev.score_card["total"] }
      end.reverse

      winning_apps[0..1].each do |winner|
        winner.awarded!
      end
    end
  end
end

Seed.new.run
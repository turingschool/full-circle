User.destroy_all
Cohort.destroy_all

User.create(uid: '22713509', role: 'admin')

10.times do |i|
  date = Date.today + i.months

  Cohort.create(
    title: ('17' + i.to_s),
    start_date: date,
    end_date: date + 3.weeks
  )
end
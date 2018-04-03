class ReviewerDashboard extends React.Component {

  constructor(props) {
    super(props)

    this.cohorts = JSON.parse(this.props.cohorts)
    this.current_cohort = JSON.parse(this.props.current_cohort)
    this.defineCurrentCohort()
    this.current_cohort.title = this.current_cohort.title + ' (Current Cohort)'
    this.user = JSON.parse(this.props.user)
    this.authorization = 'Bearer ' + this.props.authorization
  }
  
  defineCurrentCohort() {
    return this.cohorts.map((cohort, i) => {
      if (cohort.title == this.current_cohort.title) {
        cohort.title = this.current_cohort.title + ' (Current Cohort)'
      }
    })
  }

  handleChange(action){
    this.setState(action)
  }
  
  render() {
    return (
      <main className='main-vert-frame'>
        <Header user={this.user} />
        <section className='reviewer'>
          <ReviewerViewApplications
            cohorts={this.cohorts}
            user={this.user}
            cohort={this.current_cohort}
            message={this.message}
            authorization={this.authorization} />
        </section>
      </main>
    )
  }
}
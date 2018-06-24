class ReviewerDashboard extends React.Component {

  constructor(props) {
    super(props)

    this.cohorts = JSON.parse(this.props.cohorts)
    if(this.props.current_cohort){
      this.current_cohort = JSON.parse(this.props.current_cohort)
    }
    if(this.current_cohort){
      this.current_cohort.title += ' (Current Cohort)'
    }
    this.defineCurrentCohort()
    this.user = JSON.parse(this.props.user)
    this.authorization = 'Bearer ' + this.props.authorization
  }
  
  defineCurrentCohort() {
    return this.cohorts.map((cohort, i) => {
      if (this.current_cohort && cohort.id === this.current_cohort.id) {
        cohort.title = cohort.title + ' (Current Cohort)'
      }
    })
  }

  handleChange(action){
    this.setState(action)
  }
  
  findCohort(){
    if(this.current_cohort) {
      return this.current_cohort
    } else {
      return this.cohorts[0]
    }
  }
  
  confirmReviewerHasCohorts() {
    if(this.user.cohort_reviewers.length != 0) {
      return (<ReviewerViewApplications
        cohorts={this.cohorts}
        user={this.user}
        cohort={this.findCohort()}
        message={this.message}
        authorization={this.authorization} />)
    } else {
      return (<section className='reviewer-header'>You do not yet have any Cohorts to review</section>)
    }
  }
  
  render() {
    return (
      <main className='main-vert-frame'>
        <Header user={this.user} />
        <section className='reviewer'>
          {this.confirmReviewerHasCohorts()}
        </section>
      </main>
    )
  }
}

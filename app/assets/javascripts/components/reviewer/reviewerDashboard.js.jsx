class ReviewerDashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cohorts: JSON.parse(this.props.cohorts)
    }

    this.current_cohort = JSON.parse(this.props.current_cohort)
    this.user = JSON.parse(this.props.user)
    this.authorization = 'Bearer ' + this.props.authorization
  }

  // handleChange(action){
  //   this.setState(action)
  // }
  
  render() {
    return (
      <main className='main-vert-frame'>
        <Header user={this.user} />
        <section className='admin'>
          <h2 className='page-title'> Reviewer Dashboard </h2>
          <ReviewerViewApplications
            cohorts={this.state.cohorts}
            cohort={this.current_cohort}
            authorization={this.authorization} />
        </section>
      </main>
    )
  }
}
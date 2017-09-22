class StudentDashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      application: {},
      currentCohort: {}
    }

    this.user = JSON.parse(this.props.user)
    this.authorization = 'Bearer ' + this.props.authorization
  }

  componentWillMount(){
    let current_cohort = JSON.parse(this.props.current_cohort)
    let application = JSON.parse(this.props.application)

    this.setState({
      currentCohort: current_cohort,
      application: application
    })
  }

  handleChange(action) {
    this.setState(action)
  }

  render() {
    let page = this.routing()

    return (
      <main className='main-vert-frame'>
        <Header user={this.user} />
        <section className='student'>
          { page }
        </section>
      </main>
    )
  }

  routing() {
    if (this.state.currentCohort == null) {
      return <NotAcceptingApplications />
    } else {
      if (this.state.application) {
        return <StudentApplicationSection
          application={this.state.application}
          cohort={this.state.currentCohort}
          authorization={this.authorization} />
      } else {
        return <StudentConfirmCohort
          currentCohort={this.state.currentCohort}
          newApplication={this.newApplication.bind(this)} />
      }
    }
  }

  newApplication() {
    let params = `?cohort_id=${this.state.currentCohort["id"]}`

    let options = {
      method: 'POST',
      headers: { 'Authorization': this.authorization }
    }

    fetch('/api/v1/student/applications' + params, options)
      .then((data) => {
        return data.json()
      })
      .then((json) => {
        this.handleChange({ application: json })
      })
  }
}
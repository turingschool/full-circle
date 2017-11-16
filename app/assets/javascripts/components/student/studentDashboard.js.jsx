class StudentDashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cohort: {},
      application: {},
      header: "Complete Your Essay"
    }

    this.user = JSON.parse(this.props.user)
    this.authorization = 'Bearer ' + this.props.authorization
  }

  componentWillMount(){
    let cohort = JSON.parse(this.props.cohort)
    let application = JSON.parse(this.props.application)

    this.setState({
      cohort: cohort,
      application: application
    })
  }

  handleChange(action) {
    this.setState(action)
  }

  routing() {
    if (this.state.cohort == null) {
      return <NotAcceptingApplications />
    } else {
      if (this.state.application) {
        return <StudentApplicationSection
          header={this.state.header}
          application={this.state.application}
          cohort={this.state.cohort}
          user={this.user}
          authorization={this.authorization} />
      } else {
        return <StudentConfirmCohort
          cohort={this.state.cohort}
          newApplication={this.newApplication.bind(this)} />
      }
    }
  }

  newApplication() {
    let params = `?cohort_id=${this.state.cohort["id"]}`

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
  
  
  render() {
    let page = this.routing()

    return (
      <main className='main-vert-frame'>
        <Header user={this.user} />
        <section className='student'>
          <h1 className='essay-title'> { this.state.header } </h1>
          { page }
        </section>
      </main>
    )
  }
}
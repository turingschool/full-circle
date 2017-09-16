class StudentDashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      student: {},
      application: {},
      currentCohort: {}
    }

    this.authorization = {
      'Authorization': 'Bearer ' + this.props.authorization
    }
  }

  componentWillMount(){
    let current_cohort = JSON.parse(this.props.current_cohort)
    let student = JSON.parse(this.props.student)
    let application = JSON.parse(this.props.application)

    this.setState({
                    currentCohort: current_cohort,
                    student: student,
                    application: application
                  })
  }

  handleChange(action) {
    this.setState(action)
  }

  render() {
    let page = this.decisionTree()

    return (
      <main className='student-frame'>
        { page }
      </main>
    )
  }

  decisionTree() {
    if (this.state.currentCohort.length < 1) {
      return <NotAcceptingApplications />
    } else {
      if (this.state.application) {
        return <ApplicationForm
          application={this.state.application}
          authorization={this.authorization} />
      } else {
        return <ConfirmCohort
          currentCohort={this.state.currentCohort}
          newApplication={this.newApplication.bind(this)} />
      }
    }
  }

  newApplication() {
    let params = `?cohort_id=${this.state.currentCohort["id"]}`

    let options = {
      method: 'POST',
      headers: this.authorization
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
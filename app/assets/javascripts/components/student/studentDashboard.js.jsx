class StudentDashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      student: {},
      application: {},
      current_cohort: {}
    }

    this.authorization = {
      headers: {
        'Authorization': 'Bearer ' + this.props.authorization
      }
    }
  }

  componentWillMount(){
    let current_cohort = JSON.parse(this.props.current_cohort)
    let student = JSON.parse(this.props.student)
    let application = JSON.parse(this.props.application)

    debugger
    this.setState({
                    current_cohort: current_cohort,
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
    if (this.state.current_cohort.length < 1) {
      return <NotAcceptingApplications />
    } else {
      if (this.state.application) {
        return <span>{this.props.student}</span>
      } else {
        return <span>Please confirm this is your current cohort</span>
      }
    }
  }
}
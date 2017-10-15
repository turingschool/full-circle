class AdminViewCohorts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'Welcome',
      cohorts: [],
      cohort: {},
      applications: [],
      application: {}
    }
  }

  componentWillMount() {
    let cohorts = this.props.cohorts
    let cohort = this.props.cohorts[0]

    this.setState({
      cohorts: cohorts,
      cohort: cohort,
      applications: cohort.applications,
      application: cohort.applications[0]
    })
  }

  handleAction(action) {
    this.setState(action)
  }

  render() {
    return(
      <section className='main-horz-frame'>
        <ViewCohortsSection
          cohorts={this.state.cohorts}
          cohort={this.state.cohort}
          handleAction={this.handleAction.bind(this)}
          authorization={this.props.authorization} />

        <ViewApplicationSection
          application={this.state.application}
          handleAction={this.handleAction}
          authorization={this.props.authorization} />
        
      </section>
    )
  }
}
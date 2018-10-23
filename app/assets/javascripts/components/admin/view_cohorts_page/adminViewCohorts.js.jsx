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

    if (cohort != undefined){
      this.setState({
        cohorts: cohorts,
        item: cohort,
        applications: cohort.applications,
        application: sortedWithReviewCount(cohort.applications)[0]
      })
    }
  }

  handleAction(action) {
    this.setState(action)
  }

  applicationSection() {
    if (this.state.application != undefined) {
      return <AdminViewApplicationSection
        application={this.state.application}
        handleAction={this.handleAction.bind(this)}
        authorization={this.props.authorization} />
    } else {
      return <section className='no-application'>
        No Applications
      </section>
    }
  }

  render() {
    return(
      <section className='main-horz-frame'>
        <AdminViewCohortsSection
          cohorts={this.state.cohorts}
          cohort={this.state.item}
          handleAction={this.handleAction.bind(this)}
          authorization={this.props.authorization} />

        {this.applicationSection()}
      </section>
    )
  }
}

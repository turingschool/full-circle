class ReviewerViewApplications extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      message: '',
      cohorts: [],
      item: {},
      applications: [],
      application: {}
    }
  }

  componentWillMount() {
    let cohorts = this.props.cohorts
    let cohort = this.props.cohort
    let applications = cohort.applications.filter(app => app.state == 'submitted')
    if (cohort != undefined){
      this.setState({
        cohorts: cohorts,
        item: cohort,
        applications: applications,
        application: applications[0]
      })
    }
  }

  handleAction(action) {
    this.setState(action)
  }

  applicationSection() {
    if (this.state.application != undefined) {
      return <ReviewerViewApplicationSection
        applications={this.state.applications}
        application={this.state.application}
        handleAction={this.handleAction.bind(this)}
        user={this.props.user}
        message={this.state.message}
        authorization={this.props.authorization} />
    } else {
      return <section className='no-application reviewer-no-app'>
        No Submitted Applications
      </section>
    }
  }
  
  render() {
    return(
      <section className='main-horz-frame'>
        <ReviewerViewCohortsSection
          cohorts={this.state.cohorts}
          cohort={this.state.item}
          applications={this.state.item.applications.filter(app => app.state == 'submitted')}
          application={this.state.item.applications.filter(app => app.state == 'submitted')[0]}
          user={this.props.user}
          handleAction={this.handleAction.bind(this)}
          authorization={this.props.authorization} />

        <section className='reviewer-application-section'>
          {this.applicationSection()}
        </section>
      </section>
    )
  }
}
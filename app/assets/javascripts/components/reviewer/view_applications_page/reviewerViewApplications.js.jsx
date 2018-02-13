class ReviewerViewApplications extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'Welcome',
      cohorts: [],
      item: {},
      applications: [],
      application: {}
    }
  }

  componentWillMount() {
    let cohorts = this.props.cohorts
    let cohort = this.props.cohort

    if (cohort != undefined){
      this.setState({
        cohorts: cohorts,
        item: cohort,
        applications: cohort.applications,
        application: cohort.applications[0]
      })
    }
  }

  handleAction(action) {
    this.setState(action)
  }

  applicationSection() {
    if (this.state.application != undefined) {
      return <ReviewerViewApplicationSection
        application={this.state.application}
        handleAction={this.handleAction.bind(this)}
        user={this.props.user}
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
        <ReviewerViewCohortsSection
          cohorts={this.state.cohorts}
          cohort={this.state.item}
          handleAction={this.handleAction.bind(this)}
          authorization={this.props.authorization} />

        {this.applicationSection()}
      </section>
    )
  }
}
class AdminCohorts extends React.Component {
  constructor() {
    super()
    this.state = {
      cohort: '',
      cohorts: [],
      message: 'Welcome',
      readOnly: true
    }
  }

  componentDidMount() {
    const { cohorts } = this.props
    const cohort = cohorts[0]
    this.handleAction({cohort}, {cohorts})
  }

  handleAction(...action) {
    this.setState({...action})
  }

  render() {
    return(
      <section className='main-horz-frame'>
        <AdminCohortsListSection
          cohort={this.state.cohort}
          cohorts={this.state.cohorts}
          handleAction={this.handleAction.bind(this)}
          authorization={this.props.authorization} />

        <AdminCohortFormSection
          cohort={this.state.cohort}
          cohorts={this.state.cohorts}
          allReviewers={this.props.allReviewers}
          message={this.state.message}
          readOnly={this.state.readOnly}
          handleAction={this.handleAction.bind(this)}
          authorization={this.props.authorization} />
      </section>
    )
  }
}

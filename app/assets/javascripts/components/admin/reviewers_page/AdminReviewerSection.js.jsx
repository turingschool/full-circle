class AdminReviewerSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cohorts: this.props.cohorts,
      cohort: this.props.cohorts[0],
      message: '',
      readOnly: true,
      allReviewers: []
    }
  }
  
  handleAction(action) {
    this.setState(action)
  }

  render() {
    return(
      <section className='main-horz-frame'>
        <AdminCohortsListSection
          cohort={this.state.cohort}
          cohorts={this.state.cohorts}
          handleAction={this.handleAction.bind(this)}
          authorization={this.props.authorization} />
        
        <AdminCohortReviewers
          cohort={this.state.cohort}
          cohorts={this.state.cohorts}
          allReviewers={this.state.allReviewers}
          message={this.state.message}
          readOnly={false}
          handleAction={this.handleAction.bind(this)}
          changePage={this.props.changePage}
          authorization={this.props.authorization} />
      </section>
    )
  }
}
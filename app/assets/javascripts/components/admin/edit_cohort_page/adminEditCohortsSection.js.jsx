class AdminEditCohortsSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cohorts: this.props.cohorts,
      cohort: this.props.cohorts[0],
      message: '',
      readOnly: true
    }
  }

  handleAction(action) {
    this.setState(action)
  }

  render() {
    return(
      <AdminEditCohorts
        cohort={this.state.cohort}
        cohorts={this.state.cohorts}
        allReviewers={this.props.allReviewers}
        message={this.state.message}
        readOnly={this.state.readOnly}
        handleAction={this.handleAction.bind(this)}
        changePage={this.props.changePage}
        authorization={this.props.authorization} />
    )
  }
}
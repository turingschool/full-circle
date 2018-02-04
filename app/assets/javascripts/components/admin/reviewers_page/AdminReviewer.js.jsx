class AdminReviewer extends React.Component {

  render() {
    return(
      <section className='cohort-form-section'>
        <AdminCohortReviewers
          cohort={this.props.cohort}
          cohorts={this.props.cohorts}
          allReviewers={this.props.allReviewers}
          message={this.props.message}
          readOnly={false}
          handleAction={this.props.handleAction}
          changePage={this.props.changePage}
          authorization={this.props.authorization} />
        
        <AdminCohortFormFooter
          cohort={this.props.cohort}
          cohorts={this.props.cohorts}
          allReviewers={this.props.allReviewers}
          readOnly={this.props.readOnly}
          message={this.props.message}
          handleAction={this.props.handleAction}
          authorization={this.props.authorization} />
      </section>
    )
  }
}
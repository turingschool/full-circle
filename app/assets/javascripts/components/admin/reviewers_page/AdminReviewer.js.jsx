class AdminReviewer extends React.Component {

  render() {
    return(
      <section className='cohort-form'>
        <AdminCohortReviewers
          cohort={this.props.cohort}
          cohorts={this.props.cohorts}
          allReviewers={this.props.allReviewers}
          message={this.props.message}
          readOnly={this.props.readOnly}
          handleAction={this.props.handleAction}
          changePage={this.props.changePage}
          authorization={this.props.authorization} />
      </section>
    )
  }
}
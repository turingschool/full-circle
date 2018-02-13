class ReviewerViewApplicationSection extends React.Component {
  findCohortReviewer(app, review) {
    return this.props.user.cohort_reviewers.find((ch_reviewer) => {
      return ch_reviewer.id == review.cohort_reviewer_id
    })
  }
  
  findUserReview(app){
    return app.reviews.find((review) => {
      return review.cohort_reviewer_id == this.findCohortReviewer(app, review).id;
    })
  }

  render() {
    let application = this.props.application
        
    return(
      <section className='view-applications'>
        <ReviewerApplicationActionBar
          application={application}
          handleAction={this.props.handleAction}
          review={this.findUserReview(application)}
          authorization={this.props.authorization} />

        <ReviewerAppDataSection
          user={application.user}
          application={application} />

      </section>
    )
  }
}
class ReviewerViewApplicationSection extends React.Component {
  
  findUserReview(app){
    return app.reviews.find((review) => {
      return this.props.user.cohort_reviewers.some((cohort_reviewer) => {
        return cohort_reviewer.id == review.cohort_reviewer_id
      })
    })
  }

  render() {
    let application = this.props.application
        
    return(
      <section className='reviewer-view-applications'>
        <h3 className='reviewer-header'>Score Application #{this.props.application.id}</h3>
        <ReviewerApplicationActionBar
          application={application}
          handleAction={this.props.handleAction}
          review={this.findUserReview(application)}
          message={this.props.message}
          authorization={this.props.authorization} />

        <section className='reviewer-messages'>
          {this.props.message}
        </section>

        <ReviewerAppDataSection
          user={application.user}
          application={application} />

      </section>
    )
  }
}
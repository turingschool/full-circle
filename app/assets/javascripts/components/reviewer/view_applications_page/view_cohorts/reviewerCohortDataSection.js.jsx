class ReviewerCohortDataSection extends React.Component {

  finalizeReviews() {
    let cohort_id = this.props.application.cohort_id
    this.props.applications.forEach((app) => {
      let review = this.findUserReview(app)
      this.checkForScores(review)
      this.finalizeReview(app, review)
    }).then(() => {
      return(
        <ReviewerPageAfterSubmission />
      )
    })
  }
  
  checkForScores(review) {
    let metrics = review.score_card.metrics
    if(metrics[0].score == 0 || metrics[1].score == 0 || metrics[2].score == 0) {
      this.props.handleAction({ message: "You are not finished scoring"})
    }
  }
  
  findUserReview(app){
    return app.reviews.find((review) => {
      return this.props.user.cohort_reviewers.some((cohort_reviewer) => {
        return cohort_reviewer.id == review.cohort_reviewer_id
      })
    })
  }
  
  finalizeReview(app, review) {
    let cohort_id = app.cohort_id
    review.status = 'reviewed'
    
    let options = this.options('PUT',
      JSON.stringify({ review: review })
    )

    ping('/api/v1/reviewer/cohorts/' + cohort_id + '/applications/' + app.id + '/reviews/' + review.id, options)
      .then((response) => {
        this.props.handleAction({
          review: review,
          message: 'Review Finalized' })
      })
      .catch((error) => {
        this.props.handleAction({message: 'Unable to Finalize Reviews'})
      })
  }

  options(verb, body = {}) {
    return {
      body: body,
      method: verb,
      headers: { 'Authorization': this.props.authorization,
                 'Content-Type': "application/json" }
    }
  }

  render() {
    return(
      <section className='cohort-data-section'>

        <ReviewerCohortApplications
          cohort={this.props.cohort}
          user={this.props.user}
          applications={this.props.applications}
          application={this.props.application}
          handleAction={this.props.handleAction} />
        
        <ClickBtn Text='Finalize Reviews'
          onClick={this.finalizeReviews.bind(this)} />
        
        {this.props.message}

      </section>
    )
  }
}
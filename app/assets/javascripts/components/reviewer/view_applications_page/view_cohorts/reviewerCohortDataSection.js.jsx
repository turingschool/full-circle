let allAppsReviewed = false
let allReviewsFinalized = false
let reviews = {}

class ReviewerCohortDataSection extends React.Component {
  
  findUserReview(app){
    return app.reviews.find((review) => {
      return this.props.user.cohort_reviewers.some((cohort_reviewer) => {
        return cohort_reviewer.id == review.cohort_reviewer_id
      })
    })
  }
  
  checkIfAllReviewsReviewed() {
    let apps = this.props.applications
    reviews = apps.map((app) => {
      return this.findUserReview(app)
    })
    let allReviewed = reviews.every((review) => {
      return review.status == 'reviewed'
    })
    
    if (allReviewed) {
      allAppsReviewed = true
      return true
    } else {
      allAppsReviewed = false
      return false
    }
  }
  
  checkIfAllReviewsFinalized() {
    let apps = this.props.applications
    reviews = apps.map((app) => {
      return this.findUserReview(app)
    })
    let allReviewed = reviews.every((review) => {
      return review.status == 'locked'
    })
    
    if (allReviewed) {
      allReviewsFinalized = true
    } else {
      allReviewsFinalized = false
    }
  }

  finalizeReviews() {
    if (allAppsReviewed) {
      reviews.forEach((review) => {
        this.lockReview(review)
      })
      this.props.handleAction({
        finalizingMessage: 'Reviews Finalized'
      })
    } else {
      this.props.handleAction({
        finalizingMessage: "To finalize reviews, each review must be saved (scores must be greater than 0)."
      })
    }
  }
  
  lockReview(review) {
    let cohort_id = this.props.application.cohort_id
    review.status = 'locked'
    
    let options = this.options('PUT',
      JSON.stringify({ review: review })
    )

    ping('/api/v1/reviewer/cohorts/' + cohort_id + '/applications/' + this.props.application.id + '/reviews/' + review.id, options)
      .then((response) => {
        this.props.handleAction({
          review: review,
          message: 'Review Locked' })
      })
      .catch((error) => {
        this.props.handleAction({message: 'Unable to Lock Review'})
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
  
  addButton() {
    if(!allReviewsFinalized) {
      return (<ClickBtn Text='Finalize Reviews'
        onClick={() => this.finalizeReviews()} />)
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
        
        {this.checkIfAllReviewsReviewed()}
        {this.checkIfAllReviewsFinalized()}
        {this.addButton()}
        
        <section className='finalizing-messages'>
          {this.props.finalizingMessage}
        </section>

      </section>
    )
  }
}
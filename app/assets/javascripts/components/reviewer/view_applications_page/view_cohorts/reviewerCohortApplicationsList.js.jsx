class ReviewerCohortApplicationList extends React.Component {
  
  reviewStatus(app) {
    if (this.findUserReview(app)) {
      return this.findUserReview(app).status
    } else {
      return "N/A"
    }
  }
  
  totalScore(app) {
    if (this.findUserReview(app)) {
      return this.findUserReview(app).score_card.total
    } else {
      return "N/A"
    }
  }
  
  findUserReview(app){
    return app.reviews.find((review) => {
      return this.props.user.cohort_reviewers.some((cohort_reviewer) => {
        return cohort_reviewer.id == review.cohort_reviewer_id
      })
    })
  }

  render() {
    return(
      <section className='cohort-applications-list'>
        <StaticTextField
          name='application'
          texts={['App #', 'Status', 'Total Score']}
          color='rgba(0, 187, 210, 1)'
          width='100%' />
        {this.props.applications.map((app) => {
          return <SelectableTextField
            key={app.id}
            texts={[app.id, this.reviewStatus(app), this.totalScore(app)]}
            width='100%'
            returnKey='application'
            returnValue={app}
            handleAction={this.props.handleAction} />
        })}
      </section>
    )
  }
}
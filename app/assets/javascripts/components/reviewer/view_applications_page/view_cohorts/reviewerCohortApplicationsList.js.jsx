class ReviewerCohortApplicationList extends React.Component {
  
  reviewStatus(app) {
    if (this.props.review) {
      return this.props.review.status
    } else {
      return "N/A"
    }
  }
  
  totalScore(app) {
    if (this.props.review) {
      return this.props.review.score_card.total
    } else {
      return "N/A"
    }
  }

  render() {
    return(
      <section className='cohort-applications-list'>
        {this.props.applications.map((app) => {
          return <SelectableTextField
            key={app.id}
            texts={[app.id, app.state, this.reviewStatus(app), this.totalScore(app)]}
            width='100%'
            returnKey='application'
            returnValue={app}
            handleAction={this.props.handleAction} />
        })}
      </section>
    )
  }
}
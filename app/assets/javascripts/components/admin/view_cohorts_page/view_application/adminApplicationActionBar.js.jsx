class AdminApplicationActionBar extends React.Component {

  showReviewers() {
    let reviewersStatuses = this.props.application.reviews.map(review => {
      return `${review.cohort_reviewer.user.email} - ${review.status}`
    })

    alert(reviewersStatuses.join('\n'))
  }

  render() {
    return(
      <section className='application-action-bar'>
        <ClickBtn
          readOnly='decline-btn'
          Text={'Decline'}
          onClick={this.props.handleAction} />

        <ClickBtn
          readOnly='award-btn'
          Text={'Award'}
          onClick={this.props.handleAction} />

        <ClickBtn
          readOnly='reviewers-btn'
          Text={'View Reviewers'}
          onClick={this.showReviewers.bind(this)} />

      </section>
    )
  }
}

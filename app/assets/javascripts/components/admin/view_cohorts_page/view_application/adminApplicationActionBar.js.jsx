class AdminApplicationActionBar extends React.Component {

  showReviewers() {
    let reviewersStatuses = this.props.application.reviews.map(review => {
      return `${review.cohort_reviewer.user.email} - ${review.status}`
    })

    alert(reviewersStatuses.join('\n'))
  }

  updateStatus(status) {
    this.props.application.status = status
    const options = {
      method: 'PUT',
      body: JSON.stringify({application: this.props.application}),
      headers: { 'Authorization': this.props.authorization,
      'Content-Type': "application/json" }}

    ping(`/api/v1/admin/applications/${this.props.application.id}`, options)
    .then(response => {
      response.json().then((json) => {
        this.props.handleAction({
          application: json,
          message: 'Application status updated'
        })
      })
    })
    .catch((error) => {
      this.props.handleAction({
        message: 'Unable to edit application status'
      })
    })
  }

  render() {
    return(
      <section className='application-action-bar'>
        <ClickBtn
          readOnly='decline-btn'
          Text={'Decline'}
          onClick={() => this.updateStatus('declined')} />

        <ClickBtn
          readOnly='award-btn'
          Text={'Award'}
          onClick={() => this.updateStatus('awarded')} />

        <ClickBtn
          readOnly='reviewers-btn'
          Text={'View Reviewers'}
          onClick={this.showReviewers.bind(this)} />

      </section>
    )
  }
}

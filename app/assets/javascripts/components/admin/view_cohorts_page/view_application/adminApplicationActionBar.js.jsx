class AdminApplicationActionBar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      sendingStatus: false,
    }
  }

  showReviewers() {
    let reviewersStatuses = this.props.application.reviews.map(review => {
      return `${review.cohort_reviewer.user.email} - ${review.status}`
    })

    alert(reviewersStatuses.join('\n'))
  }

  updateStatus(status) {
    this.setState({sendingStatus: true})

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
    .finally(() => {
      this.setState({sendingStatus: false})
    })
  }

  awardScholarship() {
    this.updateStatus('awarded')
  }

  declineScholarship() {
    this.updateStatus('declined')
  }

  render() {
    return(
      <section className='application-action-bar'>
        <ClickBtn
          readOnly='decline-btn'
          disabled={this.state.sendingStatus}
          Text={'Decline'}
          onClick={this.declineScholarship.bind(this)} />

        <ClickBtn
          readOnly='award-btn'
          disabled={this.state.sendingStatus}
          Text={'Award'}
          onClick={this.awardScholarship.bind(this)} />

        <ClickBtn
          readOnly='reviewers-btn'
          Text={'View Reviewers'}
          onClick={this.showReviewers.bind(this)} />

      </section>
    )
  }
}

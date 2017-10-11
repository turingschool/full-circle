class AdminCohortReviewerRow extends React.Component {

  render() {
    return(
      <div className='reviewer-row'>
        <span>{this.props.reviewer.name}</span>
        <ClickBtn Text='X'
          readOnly={this.props.readOnly}
          onClick={this.removeReviewer.bind(this)} />
      </div>
    )
  }

  removeReviewer() {
    let cohort_id = this.props.cohort.id

    ping('/api/v1/admin/cohorts/' + cohort_id + '/reviewers/' + this.props.reviewer.id, this.options('DELETE'))
      .then((response) => {
        response.json().then((json) => {
          this.props.cohort.reviewers = this.remainingReviewers()

          this.props.removeReviewer({
            cohort: this.props.cohort,
            message: 'Reviewer Removed'
          })
        })
      })
      .catch((error) => {
        this.props.removeReviewer({
          message: 'Unable to Remove Reviewer'
        })
      })
  }

  remainingReviewers() {
    return this.props.cohort.reviewers.filter((reviewer) => {
      return reviewer.id !== this.props.reviewer.id
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
}
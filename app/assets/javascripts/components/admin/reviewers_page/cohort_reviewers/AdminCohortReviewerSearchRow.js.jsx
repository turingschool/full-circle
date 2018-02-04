class AdminCohortReviewerSearchRow extends React.Component {

  addReviewer() {
    let cohort_id = this.props.cohort.id

    ping('/api/v1/admin/cohorts/' + cohort_id + '/reviewers/' + this.props.reviewer.id, this.options('PUT'))
      .then((response) => {
        response.json().then((json) => {
          this.props.cohort.reviewers.push(json)

          this.props.handleAction({
            cohort: this.props.cohort,
            message: 'Added Reviewer'
          })
        })
      })
      .catch((error) => {
        this.props.handleAction({message: 'Error Adding Reviewer'})
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
      <span className='reviewer-row'>
        {this.props.reviewer.name}

        <ClickBtn Text='Add'
          readOnly={this.props.readOnly}
          onClick={this.addReviewer.bind(this)} />
      </span>
    )
  }
}
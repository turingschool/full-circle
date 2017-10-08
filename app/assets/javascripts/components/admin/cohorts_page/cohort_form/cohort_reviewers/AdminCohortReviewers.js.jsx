class AdminCohortReviewers extends React.Component {

  render() {
    return(
      <section className='cohort-reviewers'>
        {this.props.cohort.reviewers.map((reviewer, i) => {
          return <AdminCohortReviewerRow key={i}
            reviewer={reviewer}
            readOnly={this.props.readOnly}
            removeReviewer={this.removeReviewer.bind(this)} />
        })}
      </section>
    )
  }

  removeReviewer() {
    this.props.updateForm({message: 'Removed Reviewer'})
  }
}
class AdminCohortReviewers extends React.Component {

  render() {
    return(
      <section className='cohort-reviewers'>
        {this.props.cohort.reviewers.map((reviewer, i) => {
          return <AdminCohortReviewerRow key={i}
            reviewer={reviewer}
            cohort={this.props.cohort}
            readOnly={this.props.readOnly}
            removeReviewer={this.props.removeReviewer}
            authorization={this.props.authorization} />
        })}

        <AdminCohortReviewerSearch
          readOnly={this.props.readOnly}
          authorization={this.props.authorization} />
      </section>
    )
  }
}
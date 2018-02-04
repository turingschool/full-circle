class AdminCohortReviewers extends React.Component {

  render() {
    return(
      <section className='cohort-reviewers-section'>
        <section className='reviewer-search-box'>
          <h3>Selected Reviewers</h3>
          <br/>
          <section className='search-results'>
            {this.props.cohort.reviewers.map((reviewer, i) => {
              return <AdminCohortReviewerRow key={i}
                reviewer={reviewer}
                cohort={this.props.cohort}
                readOnly={this.props.readOnly}
                handleAction={this.props.handleAction}
                authorization={this.props.authorization} />
            })}
          </section>
        </section>

        <AdminCohortReviewerSearch
          cohort={this.props.cohort}
          readOnly={this.props.readOnly}
          handleAction={this.props.handleAction}
          authorization={this.props.authorization} />
      </section>
    )
  }
}
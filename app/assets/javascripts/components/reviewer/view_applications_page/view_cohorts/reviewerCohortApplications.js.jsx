class ReviewerCohortApplications extends React.Component {

  render() {
    return(
      <section className='cohort-applications'>
        <h3 className='reviewer-header select-app'>Select An Application to Review</h3>

        <ReviewerCohortApplicationList
          applications={this.props.applications}
          application={this.props.application}
          user={this.props.user}
          cohort={this.props.cohort}
          handleAction={this.props.handleAction} />
        
      </section>
    )
  }
}
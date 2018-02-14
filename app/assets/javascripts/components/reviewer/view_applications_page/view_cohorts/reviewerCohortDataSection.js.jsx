class ReviewerCohortDataSection extends React.Component {

  render() {
    return(
      <section className='cohort-data-section'>

        <ReviewerCohortApplications
          cohort={this.props.cohort}
          user={this.props.user}
          applications={this.props.applications}
          application={this.props.application}
          handleAction={this.props.handleAction} />

      </section>
    )
  }
}
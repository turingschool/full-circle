class ReviewerCohortDataSection extends React.Component {

  render() {
    return(
      <section className='cohort-data-section'>

        <ReviewerCohortApplications
          cohort={this.props.cohort}
          handleAction={this.props.handleAction} />

      </section>
    )
  }
}
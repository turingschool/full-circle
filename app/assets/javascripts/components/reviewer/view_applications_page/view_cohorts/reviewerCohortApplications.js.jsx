class ReviewerCohortApplications extends React.Component {

  render() {
    return(
      <section className='cohort-applications'>
        <StaticTextField
          label='Total Apps'
          text={this.props.cohort.applications.length}
          width='50%'/>

        <ReviewerCohortApplicationList
          applications={this.props.cohort.applications}
          user={this.props.user}
          cohort={this.props.cohort}
          handleAction={this.props.handleAction} />
        
      </section>
    )
  }
}
class ReviewerCohortApplications extends React.Component {

  render() {
    return(
      <section className='cohort-applications'>
        <StaticTextField
          label='Total Applications: '
          text={this.props.applications.length}
          width='50%'/>

        <ReviewerCohortApplicationList
          applications={this.props.applications}
          user={this.props.user}
          cohort={this.props.cohort}
          handleAction={this.props.handleAction} />
        
      </section>
    )
  }
}
class ReviewerCohortApplications extends React.Component {

  render() {
    return(
      <section className='cohort-applications'>
        <h3 className='reviewer-header select-app'>Select An Application</h3>
        <StaticTextField
          name={'applications-header'}
          texts={[this.props.applications.length + ' of ' + this.props.cohort.applications.length + ' applications have been submitted']}
          width='100%'
          color='rgba(38, 38, 38, 1)'/>

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
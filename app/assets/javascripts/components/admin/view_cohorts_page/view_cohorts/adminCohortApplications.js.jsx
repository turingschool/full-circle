class AdminCohortApplications extends React.Component {

  render() {
    return(
      <section className='cohort-applications'>
        <StaticTextField
          label='Total Apps'
          text={this.props.cohort.applications.length}
          width='50%'/>

        <AdminCohortApplicationList
          applications={this.props.cohort.applications}
          handleAction={this.props.handleAction} />
        
      </section>
    )
  }
}
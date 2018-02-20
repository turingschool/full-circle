class AdminCohortApplications extends React.Component {

  render() {
    return(
      <section className='cohort-applications'>
        <h3 className='reviewer-header select-app'>Select An Application</h3>
        <StaticTextField
          name={'applications-header'}
          texts={['(' + this.props.cohort.applications.filter(app => app.state == 'submitted').length + ' of ' + this.props.cohort.applications.length + ' applications have been submitted)']}
          color={'rgba(38, 38, 38, 1)'}
          width='100%'/>

        <AdminCohortApplicationList
          applications={this.props.cohort.applications}
          handleAction={this.props.handleAction} />
        
      </section>
    )
  }
}
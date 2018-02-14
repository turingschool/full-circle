class AdminCohortApplications extends React.Component {

  render() {
    return(
      <section className='cohort-applications'>
        <StaticTextField
          name={'applications-header'}
          texts={['(' + this.props.cohort.applications.filter(app => app.state == 'submitted').length + ' of ' + this.props.cohort.applications.length + ' applications have been submitted)']}
          color={'rgba(38, 38, 38, 1)'}
          width='50%'/>

        <AdminCohortApplicationList
          applications={this.props.cohort.applications}
          handleAction={this.props.handleAction} />
        
      </section>
    )
  }
}
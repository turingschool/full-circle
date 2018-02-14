class AdminCohortApplications extends React.Component {

  render() {
    return(
      <section className='cohort-applications'>
        <StaticTextField
          name={'applications-header'}
          texts={[this.props.applications.length + ' of ' + this.props.cohort.applications.length + ' Submitted Applications']}
          color={'rgba(38, 38, 38, 1)'}
          width='50%'/>

        <AdminCohortApplicationList
          applications={this.props.cohort.applications}
          handleAction={this.props.handleAction} />
        
      </section>
    )
  }
}
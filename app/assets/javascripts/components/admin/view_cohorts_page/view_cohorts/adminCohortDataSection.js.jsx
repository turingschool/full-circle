class AdminCohortDataSection extends React.Component {

  render() {
    return(
      <section className='cohort-data-section'>
        <AdminCohortData
          cohort={this.props.cohort} />

        <AdminCohortApplications
          cohort={this.props.cohort}
          handleAction={this.props.handleAction} />

      </section>
    )
  }
}
class AdminViewCohortsSection extends React.Component {

  render() {
    return(
      <section className='view-cohorts'>
        <h3 className='reviewer-header'>Select A Cohort</h3>
        <DropDownMenu
          label='title'
          list={this.props.cohorts}
          header={this.props.cohort}
          handleAction={this.props.handleAction} />

        <AdminCohortDataSection
          cohort={this.props.cohort}
          handleAction={this.props.handleAction} />

      </section>
    )
  }
}
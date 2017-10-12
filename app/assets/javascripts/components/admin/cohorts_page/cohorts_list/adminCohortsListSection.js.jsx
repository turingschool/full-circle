class AdminCohortsListSection extends React.Component {

    render() {
      return(
        <section className='cohorts-list-section'>
          <AdminCohortsList
            cohort={this.props.cohort}
            cohorts={this.props.cohorts}
            handleAction={this.props.handleAction} />

          <AdminNewCohort
            cohorts={this.props.cohorts}
            addCohort={this.props.addCohort}
            authorization={this.props.authorization} />
        </section>
      )
    }
  }
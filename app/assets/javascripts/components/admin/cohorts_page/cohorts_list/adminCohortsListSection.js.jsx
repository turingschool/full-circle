class AdminCohortsListSection extends React.Component {

    render() {
      return(
        <section className='cohorts-list-section'>
          <AdminCohortsList
            cohort={this.props.cohort}
            cohorts={this.props.cohorts}
            changeCohort={this.props.changeCohort} />

          <AdminNewCohort
            cohorts={this.props.cohorts}
            addCohort={this.props.addCohort}
            authorization={this.props.authorization} />
        </section>
      )
    }
  }
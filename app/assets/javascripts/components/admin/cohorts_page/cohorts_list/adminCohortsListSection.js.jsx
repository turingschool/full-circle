class AdminCohortsListSection extends React.Component {

    render() {
      return(
        <section className='cohorts-section'>
          <AdminNewCohort
            cohorts={this.props.cohorts}
            addCohort={this.props.addCohort} />

          <AdminCohortsList
            cohorts={this.props.cohorts}
            changeCohort={this.props.changeCohort} />
        </section>
      )
    }
  }
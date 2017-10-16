class AdminEditCohorts extends React.Component {

    render() {
      return(
        <section className='main-horz-frame'>
          <AdminCohortsListSection
            cohort={this.props.cohort}
            cohorts={this.props.cohorts}
            handleAction={this.props.handleAction}
            authorization={this.props.authorization} />

          <AdminCohortFormSection
            cohort={this.props.cohort}
            cohorts={this.props.cohorts}
            allReviewers={this.props.allReviewers}
            message={this.props.message}
            readOnly={this.props.readOnly}
            handleAction={this.props.handleAction}
            authorization={this.props.authorization} />
        </section>
      )
    }
}
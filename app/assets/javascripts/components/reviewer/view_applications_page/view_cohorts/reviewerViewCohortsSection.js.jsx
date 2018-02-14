class ReviewerViewCohortsSection extends React.Component {

  render() {
    return(
      <section className='view-cohorts reviewer-view-cohorts'>
        <h3 className='reviewer-header'>Select a Cohort</h3>
        <DropDownMenu
          label='title'
          list={this.props.cohorts}
          header={this.props.cohort}
          application={"this.props.item.applications.filter(app => app.state == 'submitted')[0]"}
          handleAction={this.props.handleAction} />

        <ReviewerCohortDataSection
          cohort={this.props.cohort}
          applications={this.props.applications}
          application={this.props.application}
          user={this.props.user}
          handleAction={this.props.handleAction} />

      </section>
    )
  }
}
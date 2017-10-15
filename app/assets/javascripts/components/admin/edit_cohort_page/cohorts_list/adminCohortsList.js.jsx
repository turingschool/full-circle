class AdminCohortsList extends React.Component {

  render() {
    return(
      <section className='cohorts-list'>
        {this.props.cohorts.map((cohort, i) => {
          return <AdminCohortRow key={i}
            cohort={cohort}
            selected={this.selected(cohort)}
            handleAction={this.props.handleAction} />
          }
        )}
      </section>
    )
  }

  selected(cohort) {
    if (this.props.cohort.id == cohort.id) {
      return 'selected'
    }
  }
}
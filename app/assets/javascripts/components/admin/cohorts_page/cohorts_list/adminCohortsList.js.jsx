class AdminCohortsList extends React.Component {

  render() {
    return(
      <section className='cohort-list'>
        {this.props.cohorts.map((cohort, i) => {
          return <AdminCohortRow key={i}
            cohort={cohort}
            changeCohort={this.props.changeCohort} />
          }
        )}
      </section>
    )
  }
}
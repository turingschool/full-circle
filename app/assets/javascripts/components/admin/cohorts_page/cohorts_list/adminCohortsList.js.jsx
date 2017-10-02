class AdminCohortsList extends React.Component {

  render() {
    return(
      <section className='cohorts-list'>
        <AdminNewCohort
          cohorts={this.props.cohorts}
          addCohort={this.props.}/>
        {this.props.cohorts.map((cohort, i) => {
          return <AdminCohortRow key={i} cohort={cohort} />
        })}
      </section>
    )
  }
}
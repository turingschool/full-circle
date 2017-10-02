class AdminCohortsList extends React.Component {

  render() {
    return(
      <section className='cohorts-list'>
        {this.props.cohorts.map((cohort, i) => {
          return <AdminCohortRow key={i}
            cohort={cohort}
            onClick={this.props.changeCohort.bind({
              {cohort: cohort}
            })} />
        })}
      </section>
    )
  }
}
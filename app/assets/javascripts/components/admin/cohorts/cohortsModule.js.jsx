class CohortsModule extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      sortBy: 'title'
    }
  }

  render() {
    return (
      <section className='cohorts-frame'>
        {this.sortCohortsBy(this.props.cohorts).map((cohort) => {
          return <CohortModule
            key={cohort.id}
            cohort={cohort}
            onClick={this.props.handleChange} />
        })}
      </section>
    )
  }

  sortCohortsBy(cohorts) {
    return cohorts.sort((a, b) => {
      if (a[this.state.sortBy] > b[this.state.sortBy])
        return -1;
      if (a[this.state.sortBy] < b[this.state.sortBy])
        return 1;
      return 0;
    })
  }
}
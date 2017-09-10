class CohortsModule extends React.Component {
  render() {
    return (
      <section className='cohorts-frame'>
        {this.sortBy('title').map((cohort, i) => {
          return <CohortModule key={i} cohort={cohort} onClick={this.clickHandler}/>
        })}
      </section>
    )
  }

  clickHandler(e) {
    debugger
  }

  sortBy(property) {
    let sortBy = property

    return this.props.cohorts.sort((a, b) => {
      if (a[sortBy] > b[sortBy])
        return -1;
      if (a[sortBy] < b[sortBy])
        return 1;
      return 0;
    })
  }
}
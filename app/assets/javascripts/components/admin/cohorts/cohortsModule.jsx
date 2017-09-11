class CohortsModule extends React.Component {
  render() {
    return (
      <section className='cohorts-frame'>
        {this.props.cohorts.map((cohort, i) => {
          return <CohortModule key={i} cohort={cohort} onClick={this.props.handleChange}/>
        })}
      </section>
    )
  }
}
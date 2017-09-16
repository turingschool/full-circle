class CurrentCohortModule extends React.Component {

  render() {
    return(
      <section className='current-cohort-frame'>
        <CurrentCohort {...this.props}/>
      </section>
    )
  }
}
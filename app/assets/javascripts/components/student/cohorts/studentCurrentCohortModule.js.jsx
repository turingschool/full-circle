class StudentCurrentCohortModule extends React.Component {

  render() {
    return(
      <section className='current-cohort-frame'>
        <div>Please confirm that the current open cohort is the one you are applying for.</div>
        <StudentCurrentCohort {...this.props}/>
      </section>
    )
  }
}
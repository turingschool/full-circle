class AdminNewCohort extends React.Component {

  render() {
    return(
      <section className='new-cohort'>
        <ClickBtn Text='New Cohort'
          onClick={this.newCohort.bind(this)} />
      </section>
    )
  }

  newCohort() {
    console.log('New Cohort')
  }
}
class AdminNewCohort extends React.Component {

  render() {
    return(
      <section className='new-cohort'>
        <ClickBtn Text='New Cohort'
          onClick={this.props.addCohort.bind(this, {
            message: 'Made New Cohort'
          })} />
      </section>
    )
  }
}
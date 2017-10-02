class AdminCohorts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cohort: {},
      cohorts: this.props.cohorts
    }
  }

  handleChange(action) {
    this.setState(action)
  }

  render() {
    return(
      <section className='cohorts'>
        <AdminCohortsListSection
          cohorts={this.state.cohorts}
          changeCohort={this.handleChange.bind(this)}
          addCohort={this.handleChange.bind(this)} />

        <AdminCohortFormSection
          cohort={this.state.cohort} />
      </section>
    )
  }
}
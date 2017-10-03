class AdminCohorts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cohort: this.props.cohorts[0],
      cohorts: this.props.cohorts,
      message: 'Welcome'
    }
  }

  handleChange(action) {
    this.setState(action)
  }

  render() {
    return(
      <section className='main-horz-frame'>
        <AdminCohortsListSection
          cohorts={this.state.cohorts}
          changeCohort={this.handleChange.bind(this)}
          addCohort={this.handleChange.bind(this)} />

        <AdminCohortFormSection
          cohort={this.state.cohort}
          message={this.state.message}
          updateForm={this.handleChange.bind(this)} />
      </section>
    )
  }
}
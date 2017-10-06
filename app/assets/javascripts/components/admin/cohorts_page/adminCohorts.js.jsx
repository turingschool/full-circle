class AdminCohorts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cohort: this.props.cohorts[0],
      cohorts: this.props.cohorts,
      message: 'Welcome',
      readOnly: true
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
          addCohort={this.handleChange.bind(this)}
          authorization={this.props.authorization} />

        <AdminCohortFormSection
          readOnly={this.state.readOnly}
          cohort={this.state.cohort}
          cohorts={this.state.cohorts}
          message={this.state.message}
          toggleEdit={this.handleChange.bind(this)}
          saveForm={this.handleChange.bind(this)}
          updateForm={this.handleChange.bind(this)}
          deleteCohort={this.handleChange.bind(this)}
          authorization={this.props.authorization} />
      </section>
    )
  }
}
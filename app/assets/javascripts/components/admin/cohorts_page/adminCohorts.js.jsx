class AdminCohorts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cohort: {}
      cohorts: this.props.cohorts
    }
  }

  handleChange(action) {
    this.setState(action)
  }

  render() {
    return(
      <section className='cohorts'>
        <AdminCohortsList
          cohorts={this.state.cohorts}
          changeCohort={this.handleChange.bind(this)}
          addCohort={this.handleChange.bind(this)} />
      </section>
    )
  }
}
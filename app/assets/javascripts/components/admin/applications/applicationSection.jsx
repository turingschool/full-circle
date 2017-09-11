class ApplicationSection extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cohort: this.props.cohort }
    this.cohort = this.props.cohort
  }

  render() {
    return (
      <section className='main-vert-frame applications'>
        <CohortInfoModule cohort={this.cohort}/>
        <ApplicationsModule cohort={this.cohort}/>
      </section>
    )
  }

  updateCohort(cohort) {
    this.setState({ cohort: cohort})
  }
}
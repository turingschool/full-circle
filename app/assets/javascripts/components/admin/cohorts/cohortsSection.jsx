class CohortsSection extends React.Component {
  render() {
    return (
      <section className='main-vert-frame cohorts'>
        <CohortInfoModule cohort={this.props.cohort} />
        <CohortsModule cohorts={this.props.cohorts} {...this.props} />
      </section>
    )
  }
}
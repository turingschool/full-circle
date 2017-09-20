class AdminCohortsSection extends React.Component {

  render() {
    return (
      <section className='main-vert-frame cohorts'>
        <AdminCohortInfoModule cohort={this.props.cohort} />
        <AdminCohortsModule cohorts={this.props.cohorts} {...this.props} />
      </section>
    )
  }
}
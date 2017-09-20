Admin.CohortsSection = class CohortsSection extends React.Component {

  render() {
    return (
      <section className='main-vert-frame cohorts'>
        <Admin.CohortInfoModule cohort={this.props.cohort} />
        <Admin.CohortsModule cohorts={this.props.cohorts} {...this.props} />
      </section>
    )
  }
}
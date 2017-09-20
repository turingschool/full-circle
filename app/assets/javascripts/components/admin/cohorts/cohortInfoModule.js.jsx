Admin.CohortInfoModule = class CohortInfoModule extends React.Component {

  render() {
    return (
      <section className='cohort-info-frame'>
        <div className='main-vert-frame left'>
          <span>Cohort: {this.props.cohort.title}</span>
          <span>Applications: {this.props.cohort.applications.length}</span>
          <span>Reviewers: {this.props.cohort.reviewers.length}</span>
        </div>
        <div className='main-vert-frame right'>
          <Admin.ReviewersModule
            reviewers={this.props.cohort.reviewers}
          />
        </div>
      </section>
    )
  }
}
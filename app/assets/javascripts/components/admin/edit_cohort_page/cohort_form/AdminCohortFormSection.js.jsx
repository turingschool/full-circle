class AdminCohortFormSection extends React.Component {

  render() {
    return(
      <section className='cohort-form-section'>
        <AdminCohortForm
          cohort={this.props.cohort}
          readOnly={this.props.readOnly}
          handleAction={this.props.handleAction}
          authorization={this.props.authorization} />

        <AdminCohortFormFooter
          cohort={this.props.cohort}
          cohorts={this.props.cohorts}
          allReviewers={this.props.allReviewers}
          readOnly={this.props.readOnly}
          message={this.props.message}
          handleAction={this.props.handleAction}
          authorization={this.props.authorization} />
      </section>
    )
  }
}
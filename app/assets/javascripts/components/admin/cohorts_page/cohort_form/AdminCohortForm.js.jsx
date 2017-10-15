class AdminCohortForm extends React.Component {

  render() {
    return(
      <section className='cohort-form'>
        <AdminCohortFormData
          readOnly={this.props.readOnly}
          cohort={this.props.cohort}
          handleAction={this.props.handleAction} />

        <AdminCohortReviewers
          readOnly={this.props.readOnly}
          cohort={this.props.cohort}
          allReviewers={this.props.allReviewers}
          handleAction={this.props.handleAction}
          authorization={this.props.authorization} />
      </section>
    )
  }
}
class AdminCohortForm extends React.Component {

  render() {
    return(
      <section className='cohort-form'>
        <AdminCohortFormData
          readOnly={this.props.readOnly}
          cohort={this.props.cohort}
          updateForm={this.props.updateForm} />

        <AdminCohortReviewers
          readOnly={this.props.readOnly}
          cohort={this.props.cohort}
          allReviewers={this.props.allReviewers}
          updateForm={this.props.updateForm}
          removeReviewer={this.props.removeReviewer}
          addReviewer={this.props.addReviewer}
          authorization={this.props.authorization} />
      </section>
    )
  }
}
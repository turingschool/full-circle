class AdminCohortFormSection extends React.Component {

  render() {
    return(
      <section className='cohort-form-section'>
        <AdminCohortForm
          cohort={this.props.cohort}
          readOnly={this.props.readOnly}
          updateForm={this.props.updateForm}
          removeReviewer={this.props.removeReviewer}
          authorization={this.props.authorization} />

        <AdminCohortFormFooter
          cohort={this.props.cohort}
          cohorts={this.props.cohorts}
          readOnly={this.props.readOnly}
          message={this.props.message}
          toggleEdit={this.props.toggleEdit}
          saveForm={this.props.saveForm}
          deleteCohort={this.props.deleteCohort}
          authorization={this.props.authorization} />
      </section>
    )
  }
}
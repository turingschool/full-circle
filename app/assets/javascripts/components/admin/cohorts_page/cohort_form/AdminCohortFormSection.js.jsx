class AdminCohortFormSection extends React.Component {

  render() {
    return(
      <section className='cohort-form-section'>
        <AdminCohortForm
          cohort={this.props.cohort}
          readOnly={this.props.readOnly}
          updateForm={this.props.updateForm} />

        <AdminCohortFormFooter
          cohort={this.props.cohort}
          readOnly={this.props.readOnly}
          message={this.props.message}
          toggleEdit={this.props.toggleEdit}
          saveForm={this.props.saveForm} />
      </section>
    )
  }
}
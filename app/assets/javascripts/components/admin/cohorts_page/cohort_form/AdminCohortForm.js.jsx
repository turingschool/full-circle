class AdminCohortForm extends React.Component {

  render() {
    return(
      <section className='cohort-form'>
        <AdminCohortFormData
          cohort={this.props.cohort}
          updateForm={this.props.updateForm} />
        <AdminCohortReviewers />
      </section>
    )
  }
}
class AdminCohortForm extends React.Component {

  render() {
    return(
      <section className='cohort-form'>
        <AdminCohortFormData
          readOnly={this.props.readOnly}
          cohort={this.props.cohort}
          handleAction={this.props.handleAction} />
      </section>
    )
  }
}
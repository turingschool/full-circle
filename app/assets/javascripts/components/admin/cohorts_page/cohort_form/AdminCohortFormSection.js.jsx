class AdminCohortFormSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      editable: false,
      message: ""
    }
  }

  render() {
    return(
      <section className='cohort-form-section'>
        <AdminCohortForm
          cohort={this.props.cohort}
          editable={this.state.editable} />

        <AdminCohortFormFooter
          message={this.state.message} />
      </section>
    )
  }
}
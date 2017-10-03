class AdminCohortFormSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      editable: false
    }
  }

  handleChange(action){
    this.setState(action)
  }

  render() {
    return(
      <section className='cohort-form-section'>
        <AdminCohortForm
          cohort={this.props.cohort}
          editable={this.state.editable}
          updateForm={this.props.updateForm}/>

        <AdminCohortFormFooter
          message={this.props.message} />
      </section>
    )
  }
}
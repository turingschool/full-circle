class StudentApplicationSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      confirm: false,
      submitted: this.props.application.state,
      application: this.props.application,
      essay: this.props.application.essay,
      message: ""
    }
  }

  handleUpdate(action) {
    this.setState(action)
  }

  routing() {
    if (this.state.submitted == 'submitted') {
      return <StudentThanksForSubmit />
    } else if (this.state.confirm) {
      return <StudentApplicationSubmit
        essay={this.state.essay}
        user={this.props.user}
        authorization={this.props.authorization}
        submit={this.handleUpdate.bind(this)}/>
    } else {
      return <StudentApplicationEdit
        essay={this.state.essay}
        message={this.state.message}
        cohort={this.props.cohort}
        authorization={this.props.authorization}
        toggleConfirm={this.handleUpdate.bind(this)} />
    }
  }

  render() {
    let page = this.routing()

    return(
      <section className='application'>
        { page }
      </section>
    )
  }
}
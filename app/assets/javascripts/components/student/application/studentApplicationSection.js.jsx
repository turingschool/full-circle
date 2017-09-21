class StudentApplicationSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      confirm: false,
      submitted: this.props.application.state,
      application: this.props.application,
      essay: this.props.application.essay
    }
  }

  handleUpdate(action) {
    this.setState(action)
  }

  routing() {
    if (this.state.submitted == 'submitted') {
      return <ThanksForSubmit />
    } else if (this.state.confirm) {
      return <StudentApplicationSubmit
        essay={this.state.essay}
        authorization={this.props.authorization}
        submit={this.handleUpdate.bind(this)}/>
    } else {
      return <ApplicationEdit
        essay={this.state.essay}
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
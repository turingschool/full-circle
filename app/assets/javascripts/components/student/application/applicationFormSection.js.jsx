class ApplicationFormSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      essay: this.props.application.essay
    }
  }

  handleChange(event) {
    this.setState({essay: event.target.value});
  }

  render() {
    return (
      <section className='application'>

        <section className='application-form'>
          <textarea
            value={this.state.essay}
            onChange={this.handleChange.bind(this)} />
        </section>

        <section className='application-footer'>
          <div className='btn' onClick={this.updateApplication.bind(this)}>
            Save
          </div>
          <div className='message'>
            Message
          </div>
        </section>

      </section>
    )
  }

  updateApplication() {
    let options = {
      method: 'PUT',
      body: JSON.stringify({essay: this.state.essay}),
      headers: {'Authorization': this.props.authorization,
                'Content-Type': "application/json" }
    }

    fetch('/api/v1/student/applications', options)
      .then((data) => {
        return data.json()
      })
      .then((json) => {
        // Some kind of save message I think.
      })
  }

}
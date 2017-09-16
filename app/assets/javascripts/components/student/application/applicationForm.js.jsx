class ApplicationForm extends React.Component {

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
      <section className='application-form'>
        <input className='application-text'
          value={this.state.essay}
          onChange={this.handleChange.bind(this)}/>
        <button onClick={this.updateApplication.bind(this)}>Save</button>
      </section>
    )
  }

  updateApplication() {
    let params = `?essay=${this.state.essay}`

    let options = {
      method: 'PUT',
      headers: this.props.authorization
    }

    fetch('/api/v1/student/applications' + params, options)
      .then((data) => {
        return data.json()
      })
      .then((json) => {
        // Some kind of save message I think.
      })
  }

}
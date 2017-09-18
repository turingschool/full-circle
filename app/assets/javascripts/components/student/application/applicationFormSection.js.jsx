class ApplicationFormSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      essay: this.props.application.essay,
      message: ""
    }
  }

  handleChange(event) {
    this.setState({
      essay: event.target.value,
      message: 'Unsaved Changes'
    });
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

          <div className='btn' onClick={this.submitApplication.bind(this)}>
            Submit
          </div>

          <div className='message'>
            {this.state.message}
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
      .then((response) => {
        this.setState({message: 'Application Saved'})
      })
      .catch((error) => {
        this.setState({message: 'Unable to Save Application'})
      })
  }

  submitApplication() {
    console.log('Submit! Yay! Wait, are you sure?')
  }

}
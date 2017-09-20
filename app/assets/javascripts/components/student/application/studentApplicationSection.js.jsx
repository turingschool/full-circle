class StudentApplicationSection extends React.Component {

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

        <StudentApplicationForm
          essay={this.state.essay}
          onChange={this.handleChange.bind(this)} />

        <StudentApplicationFooter
          message={this.state.message}
          updateApplication={this.updateApplication.bind(this)}
          submitApplication={this.submitApplication.bind(this)} />
      </section>
    )
  }

  updateApplication() {
    let options = {
      method: 'PUT',
      body: JSON.stringify({application: {essay: this.state.essay}}),
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
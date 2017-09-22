class StudentApplicationEdit extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      essay: this.props.essay,
      message: ""
    }
  }

  handleChange(event) {
    this.setState({
      essay: event.target.value,
      message: 'Unsaved Changes'
    });
  }

  render () {
    return(
      <section className='empty-container'>
        <section className='main-horz-frame'>
          <StudentApplicationForm
            essay={this.state.essay}
            handleChange={this.handleChange.bind(this)} />

          <StudentApplicationQuestions
            cohort={this.props.cohort} />
        </section>

        <StudentApplicationFooter
          message={this.state.message}
          essay={this.state.essay}
          updateApplication={this.updateApplication.bind(this)}
          toggleConfirm={this.props.toggleConfirm} />
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
}
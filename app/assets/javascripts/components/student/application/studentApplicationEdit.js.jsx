class StudentApplicationEdit extends React.Component {

  constructor(props) {
    super(props)

    this.cohort = this.props.cohort

    this.state = {
      essay: this.props.essay,
      message: "",
      char_limit: this.props.cohort.config.essay_length
    }
  }

  handleChange(event) {
    let essay = event.target.value

    this.setState({
      essay: essay,
      message: 'Unsaved Changes',
      essayLimit: this.cohort.config.essay_length - essay.length
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
          essayLimit={this.state.essayLimit}
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
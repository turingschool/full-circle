class StudentApplicationEdit extends React.Component {

  constructor(props) {
    super(props)

    this.cohort = this.props.cohort

    this.state = {
      essay: this.props.essay,
      message: this.props.message,
      wordCount: this.wordCount(this.props.essay)
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({message: nextProps.message})
  }

  wordCount(essay) {

    if (essay == "") {
      return this.cohort.config.essay_length
    } else {
      return this.cohort.config.essay_length - essay.trim().split(' ').length
    }
  }

  trimEssay(essay) {
    return essay.split(' ').slice(0, this.cohort.config.essay_length).join(' ')
  }

  handleChange(event) {
    let essay = event.target.value
    let message = 'Unsaved Changes'

    if (essay.split(' ').length > this.cohort.config.essay_length) {
      essay = this.trimEssay(essay)
      message = 'Exceeded Word Limit'
    }

    this.setState({
      essay: essay,
      message: message,
      wordCount: this.wordCount(essay)
    })
  }

  render () {
    return(
      <section className='empty-container'>
        <section className='main-horz-frame'>
          <StudentApplicationForm
            essay={this.state.essay}
            handleChange={this.handleChange.bind(this)} />

          <StudentApplicationQuestions
            cohort={this.props.cohort}
            toggleGuidelines={this.props.toggleGuidelines}/>
        </section>

        <StudentApplicationFooter
          message={this.state.message}
          essay={this.state.essay}
          wordCount={this.state.wordCount}
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
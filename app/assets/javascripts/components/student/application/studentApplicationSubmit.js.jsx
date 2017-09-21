class StudentApplicationSubmit extends React.Component {

  render() {
    return(
      <section className='application-form'>
        <p>{this.props.essay}</p>

        <section className='confirm-submission'>
          <ClickBtn Text='Confirm' onClick={this.submitApplication.bind(this)} />
        </section>
      </section>
    )
  }

  submitApplication() {
    let options = {
      method: 'PUT',
      body: JSON.stringify({application: {state: 'submitted'}}),
      headers: {'Authorization': this.props.authorization,
                'Content-Type': "application/json" }
    }

    fetch('/api/v1/student/applications', options)
      .then((data) => {
        return data.json()
      })
      .then((response) => {
        this.props.submit( {submitted: 'submitted'} )
      }.bind(this))
      .catch((error) => {
        this.props.submit( {message: 'Unable to Submit Application'} )
      }.bind(this))
  }
}
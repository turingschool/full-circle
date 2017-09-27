class StudentApplicationSubmit extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      alt_email: this.props.user.alt_email,
      alt_name: this.props.user.alt_name
    }
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }

  render() {
    return(
      <section className='application-form'>
        <p>{this.props.essay}</p>

        <section className='confirm-alts'>
          <section className='row'>
            <h4>Email:</h4>
              <input value={this.state.alt_email}
                onChange={this.handleChange.bind(this, 'alt_email')} />
          </section>

          <section className='row'>
            <h4>Name:</h4>
              <input value={this.state.alt_name}
                onChange={this.handleChange.bind(this, 'alt_name')} />
          </section>
        </section>

        <section className='confirm-submission'>
          <ClickBtn Text='Confirm' onClick={this.submitApplication.bind(this)} />
        </section>
      </section>
    )
  }

  submitApplication() {
    let options = {
      method: 'PUT',
      body: JSON.stringify({
        application: {state: 'submitted'},
        user: {
          alt_name: this.state.alt_name,
          alt_email: this.state.alt_email
        }
      }),
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
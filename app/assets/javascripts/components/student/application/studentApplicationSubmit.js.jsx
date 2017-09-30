class StudentApplicationSubmit extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      alt_email: this.props.user.alt_email,
      alt_name: this.props.user.alt_name,
      message: ""
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
          <ClickBtn Text='Go Back'
            onClick={this.props.toggleConfirm.bind(this, {
              confirm: false
            })} />
          <span>
            {this.state.message}
          </span>
          <ClickBtn Text='Confirm' onClick={this.submit.bind(this)} />
        </section>
      </section>
    )
  }

  submit(){
    this.submitUser()
      .then(this.submitApplication.bind(this))
      .then((response) => {
        this.props.toggleConfirm({
          submitted: 'submitted'
        })
      }.bind(this))
      .catch((error) => {
        error.json().then((json) => {
          this.setState({
            message: json.join(' ')
          })
        }.bind(this))
      })
  }

  submitUser() {
    let options = {
      method: 'PUT',
      body: JSON.stringify({
        user: {
          alt_name: this.state.alt_name,
          alt_email: this.state.alt_email
        }
      }),
      headers: {'Authorization': this.props.authorization,
                'Content-Type': "application/json" }
    }

    return fetch('/api/v1/student/users', options)
      .then(this.handleErrors)
      .then((data) => {
        return data
      })
  }

  submitApplication() {
    let options = {
      method: 'PUT',
      body: JSON.stringify({application: {state: 'submitted'}}),
      headers: {'Authorization': this.props.authorization,
                'Content-Type': "application/json" }
    }

    return fetch('/api/v1/student/applications', options)
      .then(this.handleErrors)
      .then((data) => {
        return data
      })
  }

  handleErrors(response) {
    if (!response.ok) {
      throw response
    }
    return response
  }
}
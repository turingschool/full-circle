class StudentThanksForSubmit extends React.Component {

  constructor(props) {
    super(props)

    this.thankYou = "Thanks for Submitting an Application. You'll hear from us soon!"
  }

  render() {
    return(
      <section className='application-form'>
        <section className='thank-you'>
          <h3>{this.thankYou}</h3>
        </section>
      </section>
    )
  }

}
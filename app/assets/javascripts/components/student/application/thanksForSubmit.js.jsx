class ThanksForSubmit extends React.Component {

  constructor(props) {
    super(props)

    this.thankYou = "Thanks for Submitting an Application. You'll here from us soon!"
  }

  render() {
    return(
      <section className='application-form'>
        <section className='thank-you'>
          {this.thankYou}
        </section>
      </section>
    )
  }

}
class AdminAppDataSection extends React.Component {

  render() {
    return(
      <section className='application-data'>
        {this.props.application.user.name}
      </section>
    )
  }
}
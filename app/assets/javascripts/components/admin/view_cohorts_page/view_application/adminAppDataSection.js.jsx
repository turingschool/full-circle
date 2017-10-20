class AdminAppDataSection extends React.Component {

  render() {
    debugger
    return(
      <section className='application-data'>
        <StaticTextField
          label='Name'
          text={this.props.user.alt_name}
          width='50%' />

        <StaticTextField
          label='Email'
          text={this.props.user.alt_email}
          width={'50%'} />

        <StaticTextField
          label='Status'
          text={this.props.application.status}
          width={'100%'} />

      </section>
    )
  }
}
class AdminApplicationUserData extends React.Component {

  render() {
    return(
      <section className='user-data'>
        <StaticTextField
          label='Name'
          text={this.props.user.alt_name}
          width='50%' />

        <StaticTextField
          label='Email'
          text={this.props.user.alt_email}
          width={'50%'} />
      </section>
    )
  }
}
class AdminApplicationUserData extends React.Component {

  render() {
    return(
      <section className='user-data'>
        <div className='user-name'>
          Name: {this.props.user.alt_name}
        </div>
        <div className='user-email'>
          Email: {this.props.user.alt_email}
        </div>
      </section>
    )
  }
}
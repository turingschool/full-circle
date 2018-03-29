class AdminViewApplicationSection extends React.Component {

  render() {
    return(
      <section className='view-applications'>
        <h4 className='reviewer-header'>{this.props.application.user.alt_name}'s Application</h4>
        <h5>{this.props.application.user.alt_name.split(' ')[0]}'s Email: {this.props.application.user.email}</h5>
        <AdminApplicationActionBar
          application={this.props.application}
          handleAction={this.props.handleAction} />

        <AdminAppDataSection
          application={this.props.application} />

      </section>
    )
  }
}
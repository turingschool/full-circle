class AdminViewApplicationSection extends React.Component {

  render() {
    return(
      <section className='view-applications'>
        <AdminApplicationActionBar
          application={this.props.application}
          handleAction={this.props.handleAction} />

        <AdminAppDataSection
          application={this.props.application} />

      </section>
    )
  }
}
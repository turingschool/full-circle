class ReviewerViewApplicationSection extends React.Component {

  render() {
    return(
      <section className='view-applications'>
        <ReviewerApplicationActionBar
          application={this.props.application}
          handleAction={this.props.handleAction} />

        <ReviewerAppDataSection
          user={this.props.application.user}
          application={this.props.application} />

      </section>
    )
  }
}
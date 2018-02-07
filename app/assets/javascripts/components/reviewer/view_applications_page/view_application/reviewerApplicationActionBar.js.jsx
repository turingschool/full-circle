class ReviewerApplicationActionBar extends React.Component {

  render() {
    return(
      <section className='application-action-bar'>
        <ClickBtn
          readOnly='decline-btn'
          Text={'Decline'}
          onClick={this.props.handleAction} />

        <ClickBtn
          readOnly='award-btn'
          Text={'Award'}
          onClick={this.props.handleAction} />

        <ClickBtn
          readOnly='flag-btn'
          Text={'Flag'}
          onClick={this.props.handleAction} />

      </section>
    )
  }
}
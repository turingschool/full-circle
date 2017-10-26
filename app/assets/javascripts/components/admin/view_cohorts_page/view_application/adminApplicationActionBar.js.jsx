class AdminApplicationActionBar extends React.Component {

  render() {
    return(
      <section className='application-action-bar'>
        <ClickBtn
          Text={'Decline'}
          onClick={this.props.handleAction} />

        <ClickBtn
          Text={'Award'}
          onClick={this.props.handleAction} />

        <ClickBtn
          Text={'Flag'}
          onClick={this.props.handleAction} />

      </section>
    )
  }
}
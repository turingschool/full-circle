class AdminCohortReviewerRow extends React.Component {

  render() {
    return(
      <div className='reviewer-row'>
        <span>{this.props.reviewer.name}</span>
        <ClickBtn Text='X'
          show={ this.enabled() }
          onClick={ this.props.removeReviewer.bind(this) } />
      </div>
    )
  }

  enabled() {
    if (this.props.readOnly) {
      return 'disabled'
    } else {
      return 'enable'
    }
  }
}
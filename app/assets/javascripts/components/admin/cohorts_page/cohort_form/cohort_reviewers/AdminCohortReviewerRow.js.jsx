class AdminCohortReviewerRow extends React.Component {

  render() {
    return(
      <div className='reviewer-row'>
        <span>{this.props.reviewer.name}</span>
        <ClickBtn Text='X'
          readOnly={this.props.readOnly}
          onClick={ this.props.removeReviewer.bind(this) } />
      </div>
    )
  }
}
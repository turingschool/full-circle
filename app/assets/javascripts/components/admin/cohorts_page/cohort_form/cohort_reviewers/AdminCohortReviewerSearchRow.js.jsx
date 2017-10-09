class AdminCohortReviewerSearchRow extends React.Component {

  render() {
    return(
      <span className='reviewer-row'>
        {this.props.reviewer.name}

        <ClickBtn Text='Add'
          readOnly={this.props.readOnly}
          onClick={this.addReviewer.bind(this)} />
      </span>
    )
  }

  addReviewer() {
    console.log('Add Reviewer')
  }
}
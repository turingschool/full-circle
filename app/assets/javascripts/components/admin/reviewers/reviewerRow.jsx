class ReviewerRow extends React.Component {
  render() {
    return (
      <div className='reviewer'>
        <span>{this.props.reviewer.name}</span>
      </div>
    )
  }
}
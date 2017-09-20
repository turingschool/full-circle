class ClickBtn extends React.Component {
  render() {
    return(
      <div className='btn' onClick={this.props.onClick}>
        {this.props.Text}
      </div>
    )
  }
}
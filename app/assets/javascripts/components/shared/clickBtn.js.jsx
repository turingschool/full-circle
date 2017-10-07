class ClickBtn extends React.Component {
  constructor(props) {
    super(props)

    if (this.props.disabled) {
      this.disabled = true
    } else {
      this.disabled = false
    }
  }

  render() {
    return(
      <div className='btn'
        onClick={this.props.onClick}
        disabled={this.disabled}>

        {this.props.Text}
      </div>
    )
  }
}
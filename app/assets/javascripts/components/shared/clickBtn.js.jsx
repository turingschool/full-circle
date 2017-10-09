class ClickBtn extends React.Component {

  render() {
    return(
      <div className={['btn', this.props.readOnly].join(' ').trim()}
        onClick={this.props.onClick}>
        {this.props.Text}
      </div>
    )
  }
}
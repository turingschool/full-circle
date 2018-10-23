class ClickBtn extends React.Component {

  render() {
    const onClick = this.props.disabled ? false : this.props.onClick
    return(
      <div className={['btn', this.props.readOnly, this.props.disabled ? 'disabled' : ''].join(' ').trim()}
        onClick={onClick}>
        {this.props.Text}
      </div>
    )
  }
}

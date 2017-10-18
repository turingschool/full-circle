class DropDownMenuItem extends React.Component {

  render() {
    return(
      <span className='item'
        onClick={this.props.handleAction.bind(this, {item: this.props.item})}>
        {this.props.item[this.props.label]}
      </span>
    )
  }
}
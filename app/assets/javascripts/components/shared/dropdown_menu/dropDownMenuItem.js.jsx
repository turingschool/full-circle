class DropDownMenuItem extends React.Component {

  render() {
    return(
      <span className='item'
        onClick={this.props.handleAction.bind(this, {item: this.props.item, application: this.props.item.applications.filter(app => app.state == 'submitted')[0]})}>
        {this.props.item[this.props.label]}
      </span>
    )
  }
}
class DropDownMenuHeader extends React.Component {

  render() {

    return(
      <div className='header'
        onClick={this.props.toggle.bind(this, {dropDown: true})}>
        {this.props.header[this.props.label]}
      </div>
    )
  }
}
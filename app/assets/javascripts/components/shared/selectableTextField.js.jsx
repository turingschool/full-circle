class SelectableTextField extends React.Component {

  returnObject() {
    let obj = {}
    obj[this.props.returnKey] = this.props.returnValue
    return obj
  }
  
  onItemClick(event) {
    [].slice.call(event.currentTarget.parentElement.children).forEach((child) => {
      child.style.backgroundColor = 'transparent';
    })
    event.currentTarget.style.backgroundColor = 'rgba(200, 200, 200, 0.4)';
    this.props.handleAction(
      this.returnObject()
    )
  }

  render() {
    return(
      <div className='selectable-text-field'
        style={{width: this.props.width}}
        onClick={this.onItemClick.bind(this)}>

        {this.props.texts.map((text) => {
          return <span key={text}>{text}</span>
        })}
      </div>
    )
  }
}
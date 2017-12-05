class SelectableTextField extends React.Component {

  returnObject() {
    let obj = {}
    obj[this.props.returnKey] = this.props.returnValue
    return obj
  }

  render() {
    return(
      <div className='selectable-text-field'
        style={{width: this.props.width}}
        onClick={this.props.handleAction.bind(this, this.returnObject())}>

        {this.props.texts.map((text) => {
          return <span>{text}</span>
        })}
      </div>
    )
  }
}
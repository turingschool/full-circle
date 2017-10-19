class SelectableTextField extends React.Component {

  render() {
    return(
      <div className='selectable-text-field'
        style={{width: this.props.width}}
        onClick={this.props.handleAction.bind(this, this.returnObject())}>

        {this.props.texts.map((text) => {
          return text
        })}
      </div>
    )
  }

  returnObject() {
    let obj = {}
    obj[this.props.returnKey] = this.props.returnValue
    return obj
  }
}
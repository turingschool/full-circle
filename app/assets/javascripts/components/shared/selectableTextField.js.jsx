class SelectableTextField extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      application: this.props.application
    }
  }

  returnObject() {
    let obj = {}
    obj[this.props.returnKey] = this.props.returnValue
    obj['message'] = ''
    obj['finalizingMessage'] = ''
    return obj
  }

  onItemClick(event) {
    [].slice.call(event.currentTarget.parentElement.parentElement.children).forEach((child) => {
      child.children[0].style.backgroundColor = 'transparent';
    })
    event.currentTarget.style.backgroundColor = 'rgba(200, 200, 200, 0.4)';
    this.props.handleAction(
      this.returnObject()
    )
  }

  highlightApplication() {
    if (this.props.returnValue == this.props.application) {
      return (<div className='selectable-text-field'
        style={{width: this.props.width, backgroundColor: 'rgba(200, 200, 200, 0.4)'}}
        onClick={this.onItemClick.bind(this)}>
        {this.props.texts.map((text) => {
          let {displayText, classes} = text
          return <span key={displayText} className={classes}>{displayText}</span>
        })}
      </div>
      )
    } else {
      return (<div className='selectable-text-field'
        style={{width: this.props.width}}
        onClick={this.onItemClick.bind(this)}>
        {this.props.texts.map((text) => {
          let {displayText, classes} = text
          return <span key={displayText} className={classes}>{displayText}</span>
        })}
      </div>
      )
    }
  }

  render() {
    return(
      <div>{this.highlightApplication()}</div>
    )
  }
}

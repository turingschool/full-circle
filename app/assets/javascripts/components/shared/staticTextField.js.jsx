class StaticTextField extends React.Component {

  render() {
    return(
      <div className={'static-text-field ' + this.props.name}
        style={{width : this.props.width, color: this.props.color}}>
        {this.props.texts.map((text) => {
          return <span>{text}</span>
        })}
      </div>
    )
  }
}


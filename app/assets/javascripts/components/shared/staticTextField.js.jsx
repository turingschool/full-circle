class StaticTextField extends React.Component {

  render() {
    return(
      <div className='static-text-field'
        style={{width : this.props.width}}>
        <span className='static-label'>{this.props.label}</span>
        <span className='static-text'>{this.props.text}</span>
      </div>
    )
  }
}
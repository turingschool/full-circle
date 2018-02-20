class AdminCohortInputRow extends React.Component {

  render() {
    return(
      <div className='form-row'>
        <span className='input-label'>{this.props.Text}</span>

        <input className={'readOnly' + this.props.readOnly + '-admin'}
          value={this.props.Value}
          readOnly={this.props.readOnly}
          type='text'
          onChange={this.props.handleChange.bind(this, this.props.Param)} />

      </div>
    )
  }
}
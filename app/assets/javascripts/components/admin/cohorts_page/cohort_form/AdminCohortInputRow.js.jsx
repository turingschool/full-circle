class AdminCohortInputRow extends React.Component {

  render() {
    return(
      <div className='form-row'>
        <span className='input-label'>{this.props.Text}</span>

        <input value={this.props.Value}
          type='text'
          onChange={this.props.handleChange.bind(this, this.props.Param)} />

      </div>
    )
  }
}
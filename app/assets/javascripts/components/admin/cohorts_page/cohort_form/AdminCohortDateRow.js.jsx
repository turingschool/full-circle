class AdminCohortDateRow extends React.Component {

  componentDidMount() {
    $('#datetimepicker' + this.props.Id).datetimepicker({
      defaultDate: this.props.Value,
      format: 'MMMM DD, YYYY'
    });
  }

  render() {
    return(
      <div className='form-row'>
        <span className='input-label'>{this.props.Text}</span>

        <input id={'datetimepicker' + this.props.Id}
          type='text'
          onChange={this.props.handleChange.bind(this, this.props.Param)} />

      </div>
    )
  }
}
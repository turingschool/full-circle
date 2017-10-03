class AdminCohortDateRow extends React.Component {

  componentDidMount() {
    let datepicker = $('#datetimepicker' + this.props.Id)

    datepicker.datetimepicker({
      format: 'MMMM DD, YYYY'
    }).on('dp.change', (e) => {
      this.props.handleChange(this.props.Param, e)
    }.bind(this))
  }

  render() {
    return(
      <div className='form-row'>
        <span className='input-label'>{this.props.Text}</span>

        <input id={'datetimepicker' + this.props.Id}
          value={moment(this.props.Value).format('MMMM DD, YYYY')}
          type='text'
          onChange={this.props.handleChange.bind(this, this.props.Param)} />

      </div>
    )
  }
}
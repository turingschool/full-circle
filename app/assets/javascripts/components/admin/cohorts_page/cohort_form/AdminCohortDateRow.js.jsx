class AdminCohortDateRow extends React.Component {

  componentDidMount() {
    let datepicker = $('#datetimepicker' + this.props.Id)

    datepicker.datetimepicker({format: 'MMMM DD, YYYY'})
      .on('dp.change', (event) => {
        this.props.handleChange(this.props.Param, event)
    }.bind(this))
  }

  render() {
    return(
      <div className='form-row'>
        <span className='input-label'>{this.props.Text}</span>

        <input className={'readOnly' + this.props.readOnly}
          id={'datetimepicker' + this.props.Id}
          readOnly={this.props.readOnly}
          data-date={this.props.Value}
          value={moment(this.props.Value).format('MMMM DD, YYYY')}
          type='text'
          onChange={this.props.handleChange.bind(this, this.props.Param)} />

      </div>
    )
  }
}
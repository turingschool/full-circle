class AdminCohortFormData extends React.Component {

  handleChange(param, event) {

    let cohort = this.props.cohort
    cohort[param] = event.target.value

    this.props.updateForm({
      cohort: cohort,
      message: "Editing Form"
    })
  }

  render() {
    return(
      <section className='cohort-data'>

        {this.textInput('title', 'Title')}
        {this.dateInput('start_date', 'Start Date', '1')}
        {this.dateInput('end_date', 'End Date', '2')}
        {this.dateInput('open_date', 'Open Date', '3')}
        {this.dateInput('close_date', 'Close Date', '4')}
        {this.dateInput('notify_date', 'Notify Date', '5')}

      </section>
    )
  }

  dateInput(param, text, id) {
    return <AdminCohortDateRow
      readOnly={this.props.readOnly}
      Value={this.props.cohort[param]}
      Param={param} Text={text} Id={id}
      handleChange={this.handleChange.bind(this)} />
  }

  textInput(param, text) {
    return <AdminCohortInputRow
      readOnly={this.props.readOnly}
      Value={this.props.cohort[param]}
      Param={param} Text={text}
      handleChange={this.handleChange.bind(this)} />
  }
}
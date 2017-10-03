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
        <AdminCohortInputRow
          Value={this.props.cohort.title}
          Param='title' Text='Title'
          handleChange={this.handleChange.bind(this)} />

        <AdminCohortInputRow
          Value={this.props.cohort.start_date}
          Param='start_date' Text='Start Date'
          handleChange={this.handleChange.bind(this)} />

        <AdminCohortInputRow
          Value={this.props.cohort.end_date}
          Param='end_date' Text='End Date'
          handleChange={this.handleChange.bind(this)} />

        <AdminCohortInputRow
          Value={this.props.cohort.open_date}
          Param='open_date' Text='Open Date'
          handleChange={this.handleChange.bind(this)} />

        <AdminCohortInputRow
          Value={this.props.cohort.close_date}
          Param='close_date' Text='Close Date'
          handleChange={this.handleChange.bind(this)} />

        <AdminCohortInputRow
          Value={this.props.cohort.notify_date}
          Param='notify_date' Text='Notify Date'
          handleChange={this.handleChange.bind(this)} />
      </section>
    )
  }
}
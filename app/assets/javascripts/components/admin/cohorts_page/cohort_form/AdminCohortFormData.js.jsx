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

        <AdminCohortDateRow
          Value={this.props.cohort.start_date}
          Param='start_date' Text='Start Date' Id='1'
          handleChange={this.handleChange.bind(this)} />

        <AdminCohortDateRow
          Value={this.props.cohort.end_date}
          Param='end_date' Text='End Date' Id='2'
          handleChange={this.handleChange.bind(this)} />

        <AdminCohortDateRow
          Value={this.props.cohort.open_date}
          Param='open_date' Text='Open Date' Id='3'
          handleChange={this.handleChange.bind(this)} />

        <AdminCohortDateRow
          Value={this.props.cohort.close_date}
          Param='close_date' Text='Close Date' Id='4'
          handleChange={this.handleChange.bind(this)} />

        <AdminCohortDateRow
          Value={this.props.cohort.notify_date}
          Param='notify_date' Text='Notify Date' Id='5'
          handleChange={this.handleChange.bind(this)} />
      </section>
    )
  }
}
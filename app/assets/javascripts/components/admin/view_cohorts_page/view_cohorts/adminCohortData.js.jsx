class AdminCohortData extends React.Component {

  render() {
    return(
      <section className='cohort-data'>
        
        <StaticTextField
          width='50%'
          label='Status'
          text={this.props.cohort.status} />

        <StaticTextField
          width='50%'
          label='State'
          text={this.props.cohort.state} />

        <StaticTextField
          width='50%'
          label='Open Date'
          text={this.props.cohort.open_date} />

        <StaticTextField
          width='50%'
          label='Close Date'
          text={this.props.cohort.close_date} />

        <StaticTextField
          width='50%'
          label='Start Date'
          text={this.props.cohort.start_date} />

        <StaticTextField
          width='50%'
          label='End Date'
          text={this.props.cohort.end_date} />

        <StaticTextField
          width='50%'
          label='Notify Date'
          text={this.props.cohort.notify_date} />

      </section>
    )
  }
}
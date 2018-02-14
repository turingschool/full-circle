class AdminCohortData extends React.Component {

  render() {
    return(
      <section className='cohort-data'>
        
        <StaticTextField
          width='50%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Status: ' + this.props.cohort.status]} />

        <StaticTextField
          width='50%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['State: ' + this.props.cohort.state]} />

        <StaticTextField
          width='50%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Open Date: ' + this.props.cohort.open_date]} />

        <StaticTextField
          width='50%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Close Date: ' + this.props.cohort.close_date]} />

        <StaticTextField
          width='50%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Start Date: ' + this.props.cohort.start_date]} />

        <StaticTextField
          width='50%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['End Date: ' + this.props.cohort.end_date]} />

        <StaticTextField
          width='50%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Notify Date: ' + this.props.cohort.notify_date]} />

      </section>
    )
  }
}
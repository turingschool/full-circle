class AdminCohortData extends React.Component {

  render() {
    return(
      <section className='cohort-data'>

        <StaticTextField
          width='33%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['App Due Date: ' + this.props.cohort.formatted_close_date]} />
        
        <StaticTextField
          width='33%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Notify Date: ' + this.props.cohort.formatted_notify_date]} />

        <StaticTextField
          width='33%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Start Date: ' + this.props.cohort.formatted_start_date]} />

      </section>
    )
  }
}
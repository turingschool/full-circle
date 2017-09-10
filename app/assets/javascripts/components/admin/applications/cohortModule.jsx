class CohortModule extends React.Component {
  render() {
    let cohort = this.props.cohort

    return (
      <div className={['cohort', this.status(cohort)].join(' ')} key={cohort.id.toString()}>
        <span>{cohort.title}</span>
        <span className={cohort.state}>{cohort.state}</span>
      </div>
    )
  }

  status(cohort) {
    let today = new Date
    let start_date = new Date(cohort.start_date)
    let end_date = new Date(cohort.end_date)

    if (today >= start_date && today <= end_date) {
      return 'open'
    } else {
      return 'closed'
    }
  }
}
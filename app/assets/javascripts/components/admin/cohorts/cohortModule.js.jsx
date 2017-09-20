class AdminCohortModule extends React.Component {

  constructor(props) {
    super(props)

    this.cohort = this.props.cohort
  }

  render() {
    return (
      <div className={['cohort', this.status(this.cohort)].join(' ')}
          onClick={this.props.onClick.bind(this,
            { cohortInFocus: this.cohort,
              appInFocus: this.cohort.applications[0]})}>
        <span>{this.cohort.title}</span>
        <span className={this.cohort.state}>{this.cohort.state}</span>
      </div>
    )
  }

  status() {
    let today = new Date
    let start_date = new Date(this.cohort.start_date)
    let end_date = new Date(this.cohort.end_date)

    if (today >= start_date && today <= end_date)
      return 'open'
    else
      return 'closed'
  }
}
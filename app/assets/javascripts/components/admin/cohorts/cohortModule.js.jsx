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
    let open_date = new Date(this.cohort.open_date)
    let close_date = new Date(this.cohort.close_date)

    if (today >= open_date && today <= close_date)
      return 'open'
    else
      return 'closed'
  }
}
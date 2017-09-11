class AdminDashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cohorts: {},
      cohortInFocus: {},
      appInFocus: {},
      sortBy: 'title'
    }
  }

  componentWillMount(){
    let cohorts = this.sortCohortsBy(JSON.parse(this.props.cohorts))

    this.setState( {cohorts: cohorts} )
    this.setState( {cohortInFocus: cohorts[0]} )
    this.setState( {appInFocus: cohorts[0].applications[0]})
  }

  handleChange(action) {
    this.setState(action)
  }

  render() {
    return (
      <main className='admin-frame'>
        <CohortsSection
          cohorts={this.state.cohorts}
          cohort={this.state.cohortInFocus}
          handleChange={this.handleChange.bind(this)} />
        <ApplicationSection
          cohort={this.state.cohortInFocus}
          app={this.state.appInFocus}
          handleChange={this.handleChange.bind(this)} />
      </main>
    )
  }

  sortCohortsBy(cohorts) {
    return cohorts.sort((a, b) => {
      if (a[this.state.sortBy] > b[this.state.sortBy])
        return -1;
      if (a[this.state.sortBy] < b[this.state.sortBy])
        return 1;
      return 0;
    })
  }
}
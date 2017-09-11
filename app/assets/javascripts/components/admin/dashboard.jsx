class AdminDashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cohorts: {},
      cohortInFocus: {},
      sortBy: 'title'
    }
  }

  componentWillMount(){
    let cohorts = this.sortCohortsBy(JSON.parse(this.props.cohorts))

    this.setState( {cohorts: cohorts} )
    this.setState( {cohortInFocus: cohorts[0]} )
  }

  handleChange(cohort) {
    this.setState( {cohortInFocus: cohort} )
  }

  render() {
    return (
      <main className='admin-frame'>
        <CohortsSection cohorts={this.state.cohorts}
          updateApplications={this.handleChange.bind(this)}/>
        <ApplicationSection cohort={this.state.cohortInFocus}/>
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
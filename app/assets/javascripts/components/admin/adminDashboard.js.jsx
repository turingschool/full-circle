class AdminDashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cohorts: {},
      cohortInFocus: {},
      appInFocus: {}
    }

    this.user = JSON.parse(this.props.user)
    this.authorization = 'Bearer ' + this.props.authorization
  }

  componentWillMount(){
    let cohorts = JSON.parse(this.props.cohorts)

    this.setState( {cohorts: cohorts} )
    this.setState( {cohortInFocus: cohorts[0]} )
    this.setState( {appInFocus: cohorts[0].applications[0]})
  }

  handleChange(action) {
    this.setState(action)
  }

  render() {
    return (
      <main className='main-vert-frame'>
        <Header user={this.user} />
        <main className='admin'>
          <AdminCohortsSection
            cohorts={this.state.cohorts}
            cohort={this.state.cohortInFocus}
            handleChange={this.handleChange.bind(this)} />
          <AdminApplicationSection
            cohort={this.state.cohortInFocus}
            app={this.state.appInFocus}
            handleChange={this.handleChange.bind(this)} />
        </main>
      </main>
    )
  }
}
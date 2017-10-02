class AdminDashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      page: 'cohorts',
      cohort: {},
      cohorts: {}
    }

    this.user = JSON.parse(this.props.user)
    this.users = JSON.parse(this.props.users)
    this.authorization = 'Bearer ' + this.props.authorization
  }

  componentWillMount() {
    let cohorts = JSON.parse(this.props.cohorts)

    this.setState({
      cohort: cohorts[cohorts.length - 1],
      cohorts: cohorts
    })
  }

  handleChange(action){
    this.setState(action)
  }

  render() {
    let page = this.routing()

    return (
      <main className='main-vert-frame'>
        <Header user={this.user} />
        <section className='admin'>
          { page }
        </section>
      </main>
    )
  }

  routing() {
    switch(this.state.page) {
      case('cohorts'):
        return this.cohorts()
      case('cohort'):
        return this.cohort()
      case('users'):
        return this.users()
      default:
        return this.cohorts()
    }
  }

  cohorts() {
    return <AdminCohorts
      cohorts={this.state.cohorts}
      handleChange={this.handleChange.bind(this)}
      authorization={this.authorization}
    />
  }

  cohort() {
    return <AdminCohort
      cohort={this.state.cohort}
      handleChange={this.handleChange.bind(this)}
      authorization={this.authorization}
    />
  }

  users() {
    return <AdminUsers
      users={this.state.users}
      handleChange={this.handleChange.bind(this)}
      authorization={this.authorization}
    />
  }
}
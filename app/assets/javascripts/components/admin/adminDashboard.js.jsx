class AdminDashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      page: 'editCohorts',
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
      case('editCohorts'):
        return this.editCohorts()
      case('editUsers'):
        return this.users()
      default:
        return this.viewCohorts()
    }
  }

  editCohorts() {
    return <AdminEditCohorts
      cohorts={this.state.cohorts}
      changePage={this.handleChange.bind(this)}
      authorization={this.authorization} />
  }

  viewCohort() {
    return <AdminViewCohorts
      cohort={this.state.cohort}
      changePage={this.handleChange.bind(this)}
      authorization={this.authorization} />
  }

  editUsers() {
    return <AdminEditUsers
      users={this.state.users}
      changePage={this.handleChange.bind(this)}
      authorization={this.authorization} />
  }
}
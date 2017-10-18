class AdminDashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      page: 'showCohorts',
      cohorts: JSON.parse(this.props.cohorts)
    }

    this.user = JSON.parse(this.props.user)
    this.users = JSON.parse(this.props.users)
    this.authorization = 'Bearer ' + this.props.authorization
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
        return this.editUsers()
      default:
        return this.viewCohorts()
    }
  }

  editCohorts() {
    return <AdminEditCohortsSection
      cohorts={this.state.cohorts}
      changePage={this.handleChange.bind(this)}
      authorization={this.authorization} />
  }

  viewCohorts() {
    return <AdminViewCohorts
      cohorts={this.state.cohorts}
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
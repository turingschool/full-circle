class AdminNavigationBar extends React.Component {

  render() {
    return(
      <menu className='admin-navigation-bar'>

        <ClickBtn Text='Show Cohorts'
          onClick={this.props.changePage.bind(this, {page: "showCohorts" })} />

        <ClickBtn Text='Edit Cohorts'
          onClick={this.props.changePage.bind(this, {page: "editCohorts" })} />

        <ClickBtn Text='Assign Reviewers'
          onClick={this.props.changePage.bind(this, {page: "assignReviewers" })} />

        <ClickBtn Text='Edit Users'
          onClick={this.props.changePage.bind(this, {page: "editUsers" })} />

      </menu>
    )
  }
}
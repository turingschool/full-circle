class Header extends React.Component {

  constructor(props) {
    super(props)

    let loggedIn = false

    if (this.props.user != undefined) {
      loggedIn = true
    }

    this.state = {
      isLoggedIn: loggedIn
    }
  }

  logOut() {

  }

  render () {
    let user = ""
    let headerTitle = ""

    if (this.state.isLoggedIn) {
      user = (<menu className='user'>
               <span className='name'>{this.props.user.name}</span>
               <span className='logout'>
                 <a href='/logout' className='btn'>
                   Log Out
                 </a>
                </span>
             </menu>)
       const userRole = this.props.user.role
       if (userRole == 'admin') {
         headerTitle = (<span className='role-header'>Admin Dashboard</span>)
       } else if (userRole == 'reviewer') {
         headerTitle = (<span className='role-header'>Reviewer Dashboard</span>)
       } else if (userRole == 'student') {
         headerTitle = (<span className='role-header'>Student Dashboard</span>)
       }
    } else {
      user = (<menu className='user'>
              <a href='/auth/census'>
                <img src="assets/images/turing_logo.png" /> Login
              </a>
             </menu>)
      headerTitle = (<span className='role-header'></span>)
    }

    return (
      <header className='header-frame'>
        <span className='turing-logo-space'>
          <img src="assets/images/turing_logo.png" className='turing-logo'/>
        </span>
        { headerTitle }
        { user }
      </header>
    )
  }
}

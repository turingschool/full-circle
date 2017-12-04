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

    if (this.state.isLoggedIn) {
      user = <menu className='user'>
               <span className='name'>{this.props.user.name}</span>
               <span className='logout'>
                 <a href='/logout' className='btn'>
                   Log Out
                 </a>
                </span>
             </menu>
    } else {
      user = <menu className='user'>
              <a href='/auth/github' id='login-link'>
                <img src="assets/images/GitHub-Mark-Light-120px-plus.png" id='gh-nav-logo'/> Login
              </a>
             </menu>
    }

    return (
      <header className='header-frame'>
        <img src="assets/images/TuringSchool_LogoHorizontal_White.png" className='turing-logo'/>
        { user }
      </header>
    )
  }
}
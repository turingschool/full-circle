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
               <LinkBtn Text='Login' Url='/auth/github' />
             </menu>
    }

    return (
      <header className='header-frame'>
        <img src={"https://www.turing.io/sites/default/files/turing-logo_1_0.png"} className='turing-logo' />
        { user }
      </header>
    )
  }

  logOut() {

  }
}
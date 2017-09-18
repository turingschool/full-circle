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
      user = <menu>
               <span>{this.props.user.name}</span>
               <span>
                 <a href='/logout' className='btn'>
                   Log Out
                 </a>
                </span>
             </menu>
    }

    return (
      <header className='header-frame'>
        <img src={"https://www.turing.io/sites/default/files/turing-logo_1_0.png"} />
        { user }
      </header>
    )
  }

  logOut() {

  }
}
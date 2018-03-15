class HomePage extends React.Component {

  render() {
    return (
      <main className='main-vert-frame'>
        <Header />
        <section className='homepage-frame'>
          <h2>Turing School of Software & Design</h2>
          <h1>Diversity Scholarship Application</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <a href='/auth/census'>
            <button id='login-button'>
              <img src="assets/images/turing_logo.png" id='turing-logo-sm'/> Login with Turing
            </button>
          </a>
        </section>
      </main>
    )
  }
}

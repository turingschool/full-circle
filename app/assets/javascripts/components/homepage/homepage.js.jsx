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
          <a href='/auth/github'>
            <button id='login-button'>
              <img src="assets/images/GitHub-Mark-Light-120px-plus.png" id='gh-logo'/> Login with Github
            </button>
          </a>
        </section>
      </main>
    )
  }
}
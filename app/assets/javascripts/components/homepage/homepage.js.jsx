class HomePage extends React.Component {

  render() {
    return (
      <main className='main-vert-frame'>
        <Header />
        <section className='homepage-frame'>
          <h3>Turing School of Software & Design</h3>
          <h2>Scholarship Application</h2>
          <br></br>
          <LinkBtn Text='Login' Url='/auth/github' />
        </section>
      </main>
    )
  }
}
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
          <LinkBtn Text='Login' Url='/auth/github' />
        </section>
      </main>
    )
  }
}
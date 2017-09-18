class HomePage extends React.Component {

  render() {
    return (
      <main className='main-vert-frame'>
        // <Header />
        <section className='homepage-frame'>
          <LinkBtn Text='Login' Url='/auth/github' />
        </section>
      </main>
    )
  }
}
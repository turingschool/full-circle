class HomePage extends React.Component {
  render() {
    return (
      <main className='homepage-frame'>
        <section className='main-vert-frame'>
          <Btn Text='Login' Url='/auth/github' />
        </section>
      </main>
    )
  }
}
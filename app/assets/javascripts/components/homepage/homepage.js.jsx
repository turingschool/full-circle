class HomePage extends React.Component {

  render() {
    return (
      <main className='main-vert-frame'>
        <Header />
        <section className='homepage-frame'>
          <h2>Turing School of Software & Design</h2>
          <h1>Diversity Scholarship Application</h1>
          <br></br>

          <p style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>
            The diversity scholarship application has moved. Please submit your application on the turing.edu site at
            <a href='https://turing.edu/financing/diversity-scholarship-application'>
              https://turing.edu/financing/diversity-scholarship-application
            </a>
          </p>
          <br></br>
          <br></br>
          <br></br>
          // <a href='/auth/census'>
          //   <button id='login-button'>
          //     <img src="assets/images/turing_logo.png" id='turing-logo-sm'/> Login with Turing
          //   </button>
          // </a>
        </section>
      </main>
    )
  }
}

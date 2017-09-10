class AdminDashboard extends React.Component {
  render() {
    return (
      <main className='admin-frame'>
        <CohortsSection />
        <ApplicationSection />
      </main>
    )
  }
}
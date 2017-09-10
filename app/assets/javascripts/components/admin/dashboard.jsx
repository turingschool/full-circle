class AdminDashboard extends React.Component {
  render() {
    return (
      <main className='admin-frame'>
        <CohortsSection cohorts={this.props.cohorts} />
        <ApplicationSection />
      </main>
    )
  }
}
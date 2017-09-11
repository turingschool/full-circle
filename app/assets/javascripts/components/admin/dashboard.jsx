class AdminDashboard extends React.Component {
  render() {
    return (
      <main className='admin-frame'>
        <CohortsSection cohorts={this.props.cohorts}
          updateApplications={this.updateApplications}/>
        <ApplicationSection />
      </main>
    )
  }

  updateApplications(event) {
    debugger
  }
}
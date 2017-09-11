class AdminDashboard extends React.Component {

  constructor(props) {
    super(props)

    this.cohorts = JSON.parse(this.props.cohorts)
  }

  render() {
    return (
      <main className='admin-frame'>
        <CohortsSection cohorts={this.cohorts}
          updateApplications={this.updateApplications}/>
        <ApplicationSection />
      </main>
    )
  }

  updateApplications(event) {
    
  }
}
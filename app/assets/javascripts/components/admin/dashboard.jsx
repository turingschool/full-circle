class AdminDashboard extends React.Component {

  constructor(props) {
    super(props)

    this.cohorts = JSON.parse(this.props.cohorts)
    this.sortBy = 'title'
  }

  render() {
    return (
      <main className='admin-frame'>
        <CohortsSection cohorts={this.sortCohortsBy()}
          updateApplications={this.updateApplications}/>
        <ApplicationSection cohort={this.sortCohortsBy()[0]}/>
      </main>
    )
  }

  updateApplications(event) {

  }

  sortCohortsBy() {
    return this.cohorts.sort((a, b) => {
      if (a[this.sortBy] > b[this.sortBy])
        return -1;
      if (a[this.sortBy] < b[this.sortBy])
        return 1;
      return 0;
    })
  }
}
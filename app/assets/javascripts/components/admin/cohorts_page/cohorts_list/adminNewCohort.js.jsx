class AdminNewCohort extends React.Component {

  render() {
    return(
      <section className='new-cohort'>
        <ClickBtn Text='New Cohort'
          onClick={this.createCohort.bind(this)} />
      </section>
    )
  }

  createCohort() {

    ping('/api/v1/admin/cohorts', this.options())
      .then((response) => {
        response.json().then((json) => {
          this.props.cohorts.push(json)

          this.props.handleAction({
            cohorts: this.props.cohorts,
            message: 'Cohort Created'
          })
        }.bind(this))
      })
      .catch((error) => {
        this.props.handleAction({message: 'Unable to Create Cohort'})
      })
  }

  options() {
    return {
      body: JSON.stringify({ cohort: {
        title: '1703', notify_date: new Date(),
        start_date: new Date(), end_date: new Date(),
        open_date: new Date(), close_date: new Date()}
      }),
      method: 'POST',
      headers: { 'Authorization': this.props.authorization,
                 'Content-Type': "application/json" }
    }
  }
}
class AdminCohortFormFooter extends React.Component {

  render() {
    return(
      <section className='form-footer'>
        <ClickBtn Text={this.editOrSaveText()}
          onClick={this.editOrSaveFunction()} />

        {this.props.message}

        <ClickBtn Text='Delete'
          onClick={this.deleteCohort.bind(this)}
          readOnly={this.props.readOnly} />

      </section>
    )
  }

  deleteCohort() {
    let cohort_id = this.props.cohort.id

    ping('/api/v1/admin/cohorts/' + cohort_id, this.options('DELETE'))
      .then((response) => {
        response.json().then((json) => {
          let cohorts = this.removeCohort()

          this.props.handleAction({
            cohorts: cohorts,
            message: 'Cohort Deleted'
          })
        })
      })
      .catch((error) => {
        this.props.handleAction({message: 'Unable to Delete Cohort'})
      })
  }

  removeCohort() {
    return this.props.cohorts.filter((cohort) => {
      return cohort.id !== this.props.cohort.id
    })
  }

  saveCohort() {
    let cohort_id = this.props.cohort.id
    let options = this.options('PUT',
      JSON.stringify({ cohort: this.props.cohort })
    )

    ping('/api/v1/admin/cohorts/' + cohort_id, options)
      .then((response) => {
        this.props.handleAction({
          readOnly: true,
          cohort: this.props.cohort,
          message: 'Form Saved' })
      })
      .catch((error) => {
        this.props.handleAction({message: 'Unable to Save Cohort'})
      })
  }

  options(verb, body = {}) {
    return {
      body: body,
      method: verb,
      headers: { 'Authorization': this.props.authorization,
                 'Content-Type': "application/json" }
    }
  }

  editOrSaveText() {
    if(this.props.readOnly) {
      return 'Edit'
    } else {
      return 'Save'
    }
  }

  editOrSaveFunction() {
    if(this.props.readOnly) {
      return this.props.handleAction.bind(this, {
        readOnly: false,
        message: 'Editing Form'
      })
    } else {
      return this.saveCohort.bind(this)
    }
  }
}
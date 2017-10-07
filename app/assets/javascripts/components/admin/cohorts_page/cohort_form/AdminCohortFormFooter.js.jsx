class AdminCohortFormFooter extends React.Component {

  render() {
    return(
      <section className='form-footer'>
        <ClickBtn Text={this.editSaveText()}
          onClick={this.editSaveFunction()} />

        {this.props.message}

        <ClickBtn Text='Delete'
          onClick={this.deleteCohort.bind(this)}
          show={this.showDelete()} />

      </section>
    )
  }

  deleteCohort() {
    let cohort_id = this.props.cohort.id

    ping('/api/v1/admin/cohorts/' + cohort_id, this.options('DELETE'))
      .then((response) => {
        response.json().then((json) => {
          let cohorts = this.removeCohort()

          this.props.deleteCohort({
            cohorts: cohorts,
            message: 'Cohort Deleted'
          })
        })
      })
      .catch((error) => {
        this.props.deleteCohort({message: 'Unable to Delete Cohort'})
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
        this.props.saveForm({
          readOnly: true,
          cohort: this.props.cohort,
          message: 'Form Saved' })
      })
      .catch((error) => {
        this.props.deleteCohort({message: 'Unable to Save Cohort'})
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

  editSaveText() {
    if(this.props.readOnly) {
      return 'Edit'
    } else {
      return 'Save'
    }
  }

  editSaveFunction() {
    if(this.props.readOnly) {
      return this.props.toggleEdit.bind(this, {
        readOnly: false,
        message: 'Editing Form'
      })
    } else {
      return this.saveCohort.bind(this)
    }
  }

  showDelete() {
    if(this.props.readOnly) {
      return 'disable'
    } else {
      return 'enable'
    }
  }
}
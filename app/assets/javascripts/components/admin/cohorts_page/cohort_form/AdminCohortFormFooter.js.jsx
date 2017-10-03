class AdminCohortFormFooter extends React.Component {

  render() {
    return(
      <section className='form-footer'>
        <ClickBtn Text={this.editSaveText()}
          onClick={this.editSaveFunction()} />

        {this.props.message}

        <ClickBtn Text='Delete'
          onClick={this.props.deleteCohort.bind(this, {
            message: 'Deleted Cohort'
          })} />

      </section>
    )
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
      return this.props.saveForm.bind(this, {
        readOnly: true,
        cohort: this.props.cohort,
        message: 'Form Saved'
      })
    }
  }
}
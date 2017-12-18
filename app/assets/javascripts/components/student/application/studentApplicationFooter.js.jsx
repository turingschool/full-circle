class StudentApplicationFooter extends React.Component {

  validateEssay() {
    if (this.props.message == 'Unsaved Changes') {
      return { message: 'Save Before Submitting' }
    } else if (this.props.essay.length < 1) {
      return { message: 'Essay cannot be blank' }
    } else {
      return {
        confirm: true,
        essay: this.props.essay
      }
    }
  }
  
  message() {
    if (this.props.message == 'Save Before Submitting' || this.props.message == 'Essay cannot be blank')
      return (
        <div className='warn-message'>
          {this.props.message}
        </div>
      )
    else {
      return (
        <div className='message'>
          {this.props.message}
        </div>
      )
    }
  }
  
  render() {
    return(
      <section className='application-footer'>

        {this.message()}

        <div className='message'>
          {this.props.wordCount} words remaining
        </div>

        <div className='save-button'>
        <ClickBtn
          onClick={this.props.updateApplication}
          Text='Save' />
        </div>

        <ClickBtn
          onClick={this.props.toggleConfirm.bind(this, this.validateEssay())}
          Text='Submit' />
      </section>
    )
  }
}
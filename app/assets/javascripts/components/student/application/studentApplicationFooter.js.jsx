class StudentApplicationFooter extends React.Component {

  validateEssay() {
    const { essay, message } = this.props;
    if ( essay.length < 1) {
      return { message: 'Essay cannot be blank' }
    } else if (['Unsaved Changes', 'Save Before Submitting'].includes(message)) {
      return { message: 'Save Before Submitting' }
    } else {
      return {
        confirm: true,
        essay
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
        <div className='essay-info'>
          <div className='message'>
            {this.props.wordCount} words remaining
          </div>
          
          {this.message()}
        </div>

        <div className='buttons'>
          <div className='save-button'>
            <ClickBtn
              onClick={this.props.updateApplication}
              Text='Save' />
          </div>
          
          <div className='submit-button'>
            <ClickBtn
              onClick={this.props.toggleConfirm.bind(this, this.validateEssay())}
              Text='Submit' />
          </div>
        </div>
      </section>
    )
  }
}
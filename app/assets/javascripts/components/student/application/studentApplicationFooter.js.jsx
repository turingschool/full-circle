class StudentApplicationFooter extends React.Component {

  render() {
    return(
      <section className='application-footer'>
        <ClickBtn
          onClick={this.props.updateApplication}
          Text='Save' />

        <div className='message'>
          {this.props.message}
        </div>

        <div className='message'>
          {this.props.wordCount}
        </div>

        <ClickBtn
          onClick={this.props.toggleConfirm.bind(this, this.validateEssay())}
          Text='Submit' />
      </section>
    )
  }

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
}
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
          {this.props.essayLimit}
        </div>

        <ClickBtn
          onClick={this.props.toggleConfirm.bind(this,
            { confirm: true,
              essay: this.props.essay } )}
          Text='Submit' />

      </section>
    )
  }
}
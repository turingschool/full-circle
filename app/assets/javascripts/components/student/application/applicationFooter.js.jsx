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

        <ClickBtn
          onClick={this.props.confirmApplication}
          Text='Submit' />

      </section>
    )
  }
}
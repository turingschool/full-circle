class ApplicationFooter extends React.Component {

  render() {
    return(
      <section className='application-footer'>
        <ClickBtn
          onClick={this.props.updateApplication}
          Text='Save' />

        <ClickBtn
          onClick={this.props.submitApplication}
          Text='Submit' />

        <div className='message'>
          {this.props.message}
        </div>
      </section>
    )
  }
}
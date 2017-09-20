class StudentApplicationForm extends React.Component {

  render() {
    return(
      <section className='application-form'>
        <textarea
          value={this.props.essay}
          onChange={this.props.onChange} />
      </section>
    )
  }

}
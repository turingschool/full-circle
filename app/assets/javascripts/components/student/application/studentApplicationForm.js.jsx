class StudentApplicationForm extends React.Component {

  render() {
    return(
      <section className='application-form'>
        <textarea
          type='text'
          value={this.props.essay}
          onChange={this.props.handleChange.bind(this) } />
      </section>
    )
  }

}
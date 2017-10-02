class AdminCohortFormSection extends React.Component {

  render() {
    return(
      <section className='cohort-form-section'>
        {this.props.cohort.title}
      </section>
    )
  }
}
class AdminCohortFormSection extends React.Component {

  render() {
    return(
      <section className='cohort-form'>
        {this.props.cohort.title}
      </section>
    )
  }
}
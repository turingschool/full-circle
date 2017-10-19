class AdminCohortData extends React.Component {

  render() {
    return(
      <section className='cohort-data'>
        <StaticTextField
          width='50%'
          label='Status'
          text={this.props.cohort.title} />

      </section>
    )
  }
}
class ApplicationSection extends React.Component {

  render() {
    return (
      <section className='main-vert-frame applications'>
        <CohortInfoModule cohort={this.props.cohort}/>
        <ApplicationsModule cohort={this.props.cohort}/>
      </section>
    )
  }
}
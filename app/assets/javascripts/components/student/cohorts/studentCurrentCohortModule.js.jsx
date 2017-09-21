class StudentCurrentCohortModule extends React.Component {

  render() {
    return(
      <section className='confirm-cohort-frame'>
        <p>Please confirm that the current open cohort is the one you are applying for.</p>
        <ClickBtn
          Text={this.props.currentCohort.title}
          onClick={this.props.newApplication} />
      </section>
    )
  }
}
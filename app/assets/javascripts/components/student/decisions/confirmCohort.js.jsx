class ConfirmCohort extends React.Component {

  render() {
    return (
      <section className='main-vert'>
          <CurrentCohortModule {...this.props} />
      </section>
    )
  }
}
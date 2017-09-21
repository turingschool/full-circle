class ConfirmCohort extends React.Component {

  render() {
    return (
      <section className='main-vert'>
          <StudentCurrentCohortModule {...this.props} />
      </section>
    )
  }
}
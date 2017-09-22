class StudentConfirmCohort extends React.Component {

  render() {
    return (
      <section className='main-vert'>
          <StudentCurrentCohort {...this.props} />
      </section>
    )
  }
}
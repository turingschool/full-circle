class ConfirmCohort extends React.Component {

  render() {
    return (
      <section className='main-vert'>
          <Student.CurrentCohortModule {...this.props} />
      </section>
    )
  }
}
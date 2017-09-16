class ConfirmCohort extends React.Component {

  render() {
    return (
      <main className='confirm-cohort-frame'>
          <CurrentCohortModule {...this.props} />
      </main>
    )
  }
}
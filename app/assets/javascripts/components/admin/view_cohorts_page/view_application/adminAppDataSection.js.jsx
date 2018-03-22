class AdminAppDataSection extends React.Component {

  render() {
    return(
      <section className='application-data'>
        <AdminApplicationScore
          application={this.props.application} />
        <section className='student-essay'>
          {this.props.application.essay}
        </section>

      </section>
    )
  }
}
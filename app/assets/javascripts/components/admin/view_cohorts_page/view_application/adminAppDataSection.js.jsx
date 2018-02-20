class AdminAppDataSection extends React.Component {

  render() {
    return(
      <section className='application-data'>
        <AdminApplicationScore
          reviews={this.props.application.reviews} />
        <section className='student-essay'>
          {this.props.application.essay}
        </section>

      </section>
    )
  }
}
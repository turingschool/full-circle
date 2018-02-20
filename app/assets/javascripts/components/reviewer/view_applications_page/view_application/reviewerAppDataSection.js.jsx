class ReviewerAppDataSection extends React.Component {

  render() {
    return(
      <section className='application-data'>
        <section className='student-essay'>
          {this.props.application.essay}
        </section>

      </section>
    )
  }
}
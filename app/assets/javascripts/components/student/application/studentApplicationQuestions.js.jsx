class StudentApplicationQuestions extends React.Component {

  render() {
    let date = new Date(this.props.cohort.end_date)

    return(
      <section className='application-questions'>
        <section className='inside-border'>
          <section className='info'>
            <h4>Application Deadline</h4>
            <p>{ date.toDateString() }</p>
          </section>
          <section className='questions'>
            <h4>Please answer the following questions.</h4>
          </section>
        </section>
      </section>
    )
  }
}
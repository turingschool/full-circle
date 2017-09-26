class StudentApplicationQuestions extends React.Component {

  render() {
    let date = new Date(this.props.cohort.end_date)

    debugger
    return(
      <section className='application-questions'>
        <section className='inside-border'>
          <section className='info'>
            <h4>Application Deadline</h4>
            <p>{ date.toDateString() }</p>
          </section>
          <section className='questions'>
            <h4>Please answer the following four questions in your essay.</h4>
            {this.props.cohort.config.questions.map((question, i) => {
              return <p key={i}>{question}</p>
            })}
          </section>
        </section>
      </section>
    )
  }
}
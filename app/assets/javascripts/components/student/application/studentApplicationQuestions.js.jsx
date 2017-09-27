class StudentApplicationQuestions extends React.Component {

  constructor(props) {
    super(props)

    this.end_date = this.props.cohort.end_date
    this.questions = this.props.cohort.config.questions
  }

  render() {
    let date = new Date(this.end_date)

    return(
      <section className='application-questions'>
        <section className='inside-border'>
          <section className='info'>
            <h4>Application Deadline</h4>
            <p>{ date.toDateString() }</p>
          </section>
          <section className='questions'>
            <h4>Please answer the following four questions in your essay.</h4>
            {this.questions.map((question, i) => {
              return <p key={i}>{question}</p>
            })}
          </section>
        </section>
      </section>
    )
  }
}
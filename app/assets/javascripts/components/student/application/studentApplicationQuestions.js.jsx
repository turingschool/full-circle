class StudentApplicationQuestions extends React.Component {

  constructor(props) {
    super(props)

    this.close_date = this.props.cohort.close_date
    this.questions = this.props.cohort.questions
  }

  render() {
    let date = new Date(this.close_date.replace(/-/g, '\/'))

    return(
      <section className='application-questions'>
        <section className='inside-border'>
          <section className='info'>
            <p>Application Deadline</p>
            <h4>{ date.toDateString() }</h4>
          </section>
          <section className='guidelines'>
            <ClickBtn
              Text='Read Guidelines'
              onClick={this.props.toggleGuidelines.bind(this, {
                guidelines: 'enable'
              })} />
          </section>
          <section className='questions'
            dangerouslySetInnerHTML={{__html: this.questions}}>
          </section>
        </section>
      </section>
    )
  }
}
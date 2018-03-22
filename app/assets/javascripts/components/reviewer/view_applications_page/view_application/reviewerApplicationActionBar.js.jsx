class ReviewerApplicationActionBar extends React.Component {

  findScoreMetricValue(param) {
    return this.props.review.score_card.metrics.find((metric) => {
      return metric.name == param
    })
  }
  
  handleChange(param, event) {
    let review = this.props.review
    this.findScoreMetricValue(param).score = parseInt(event.target.value)

    this.props.handleAction({
      review: review,
      message: "Editing Scores"
    })
  }

  textInput(param, text) {
    return <ReviewerAppScoreInputRow
      readOnly={false}
      Value={this.findScoreMetricValue(param).score}
      Param={param} Text={text}
      handleChange={this.handleChange.bind(this)} />
  }
  
  saveReview() {
    let cohort_id = this.props.application.cohort_id
    this.props.review.status = 'reviewed'
    this.props.review.score_card.total = this.props.review.score_card.metrics[0].score + this.props.review.score_card.metrics[1].score +this.props.review.score_card.metrics[2].score
    
    let options = this.options('PUT',
      JSON.stringify({ review: this.props.review })
    )

    ping('/api/v1/reviewer/cohorts/' + cohort_id + '/applications/' + this.props.application.id + '/reviews/' + this.props.review.id, options)
      .then((response) => {
        this.props.handleAction({
          review: this.props.review,
          message: 'Scores Saved' })
      })
      .catch((error) => {
        this.props.handleAction({message: 'Unable to Save Application Review'})
      })
  }

  options(verb, body = {}) {
    return {
      body: body,
      method: verb,
      headers: { 'Authorization': this.props.authorization,
                 'Content-Type': "application/json" }
    }
  }
  
  render() {
    return(
      <section className='application-action-bar'>
        {this.textInput('passion', 'Passion: ')}
        {this.textInput('dedication', 'Dedication: ')}
        {this.textInput('need', 'Need: ')}
        <ClickBtn Text='Save'
          onClick={this.saveReview.bind(this)} />
      </section>
    )
  }

}
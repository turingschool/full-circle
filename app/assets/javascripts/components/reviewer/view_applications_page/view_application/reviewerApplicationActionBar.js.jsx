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
    return (<ReviewerAppScoreInputRow
      reviewLockStatus={this.props.review.status == 'locked'}
      Value={this.findScoreMetricValue(param).score}
      Param={param} Text={text}
      handleChange={this.handleChange.bind(this)} />)
  }
  
  saveReview() {
    let cohort_id = this.props.application.cohort_id
    let review = this.props.review
    const prevReviewStatus = review.status
    let metrics = review.score_card.metrics
    
    review.score_card.total = metrics[0].score + metrics[1].score + metrics[2].score
    
    if (metrics[0].score == 0 || metrics[1].score == 0 || metrics[2].score == 0) {
      review.status = 'reviewing'
      this.props.handleAction({review: review})
    } else {
      review.status = 'reviewed'
      this.props.handleAction({review: review})
    }
    
    let options = this.options('PUT',
      JSON.stringify({ review: review })
    )

    ping('/api/v1/reviewer/cohorts/' + cohort_id + '/applications/' + this.props.application.id + '/reviews/' + review.id, options)
      .then((response) => {
        if (metrics[0].score == 0 || metrics[1].score == 0 || metrics[2].score == 0) {
          this.props.handleAction({
            message: 'Scores saved but one or more scores must still be updated.'
          })
        } else {
          this.props.handleAction({ message: 'Scores Saved' })
        }
      })
      .catch((error) => {
        review.status = prevReviewStatus
        
        this.props.handleAction({
          review: review,
          message: 'Unable to Save Application Review'
        })
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
  
  addButton() {
    if(this.props.review.status != 'locked') {
      return (<ClickBtn Text='Save'
        onClick={this.saveReview.bind(this)} />)
    }
  }
  
  render() {
    return(
      <section className='application-action-bar'>
        {this.textInput('passion', 'Passion: ')}
        {this.textInput('dedication', 'Dedication: ')}
        {this.textInput('need', 'Need: ')}
        {this.addButton()}
      </section>
    )
  }

}
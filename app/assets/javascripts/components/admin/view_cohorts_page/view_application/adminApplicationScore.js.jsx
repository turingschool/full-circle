class AdminApplicationScore extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      reviewersReviewed: 0
    }
  }

  getMetricAvg(ofMetric) {
    let sum = 0
    this.state.reviewersReviewed = 0

    this.props.reviews.forEach((review) => {
      let theMetric = review.score_card.metrics.filter((metric) => {
        return metric.name == ofMetric
      })

      if (theMetric[0].score != 0) {
        sum += theMetric[0].score
        this.state.reviewersReviewed += 1
      }
    })
    
    return (sum / this.state.reviewersReviewed).toFixed(2)
  }
  
  calculateTotalAverage() {
    return parseFloat(this.getMetricAvg('passion')) + parseFloat(this.getMetricAvg('dedication')) + parseFloat(this.getMetricAvg('need'))
  }

  render() {
    return(
      <section className='application-scores'>
        <StaticTextField
          width='20%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Avg Total: ' + this.calculateTotalAverage()]} />

        <StaticTextField
          width='20%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Avg Passion: ' + this.getMetricAvg('passion')]} />

        <StaticTextField
          width='20%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Avg Dedication: ' + this.getMetricAvg('dedication')]} />

        <StaticTextField
          width='20%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Avg Need: ' + this.getMetricAvg('need')]}  />

        <StaticTextField
          width='20%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={[this.state.reviewersReviewed + ' / ' + this.props.reviews.length + ' Reviews']}  />

      </section>
    )
  }
}
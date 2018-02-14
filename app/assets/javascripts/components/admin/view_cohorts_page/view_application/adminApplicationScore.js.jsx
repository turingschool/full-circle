class AdminApplicationScore extends React.Component {

  getMetricAvg(ofMetric) {
    let sum = 0;

    this.props.reviews.forEach((review) => {
      let theMetric = review.score_card.metrics.filter((metric) => {
        return metric.name == ofMetric
      })

      sum += theMetric[0].score
    })

    return (sum / this.props.reviews.length).toFixed(2)
  }

  render() {
    return(
      <section className='application-scores'>
        <StaticTextField
          width='50%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Total: ']} />

        <StaticTextField
          width='50%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Average: ']} />
          
        <br></br>

        <StaticTextField
          width='33.33%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Passion: ' + this.getMetricAvg('passion')]} />

        <StaticTextField
          width='33.33%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Dedication: ' + this.getMetricAvg('dedication')]} />

        <StaticTextField
          width='33.33%'
          color='rgba(38, 38, 38, 1)'
          name=''
          texts={['Need: ' + this.getMetricAvg('need')]}  />

      </section>
    )
  }
}
class AdminApplicationScore extends React.Component {

  render() {

    return(
      <section className='application-scores'>
        <StaticTextField
          label='Total'
          text={'100'}
          width={'50%'} />

        <StaticTextField
          label='Average'
          text={'100'}
          width={'50%'} />

        <StaticTextField
          label='Passion'
          text={this.getMetricAvg('passion')}
          width={'33.33%'} />

        <StaticTextField
          label='Dedication'
          text={this.getMetricAvg('dedication')}
          width={'33.33%'} />

        <StaticTextField
          label='Need'
          text={this.getMetricAvg('need')}
          width={'33.33%'} />

      </section>
    )
  }

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
}
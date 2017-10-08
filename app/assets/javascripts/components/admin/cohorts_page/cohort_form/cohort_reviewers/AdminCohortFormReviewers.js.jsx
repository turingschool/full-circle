class AdminCohortReviewers extends React.Component {

  render() {
    return(
      <section className='cohort-reviewers'>
        {this.props.cohort.reviewers.map((reviewer, i) => {
          return <span key={i}>{reviewer.name}</span>
        })}
      </section>
    )
  }
}
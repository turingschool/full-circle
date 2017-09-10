class CohortModule extends React.Component {
  render() {
    let cohort = this.props.cohort

    return (
      <span className='cohort' key={cohort.id.toString()}>{cohort.title}</span>
    )
  }
}
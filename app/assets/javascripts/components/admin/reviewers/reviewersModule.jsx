class ReviewersModule extends React.Component {
  render() {
    return (
      <section className='reviewers-frame'>
        { this.props.reviewers.map((reviewer) => {
            return <ReviewerRow
              key={reviewer.id}
              reviewer={reviewer}
            />
        })}
      </section>
    )
  }
}
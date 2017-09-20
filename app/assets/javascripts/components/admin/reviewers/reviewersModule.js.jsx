Admin.ReviewersModule = class ReviewersModule extends React.Component {
  render() {
    return (
      <section className='reviewers-frame'>
        { this.props.reviewers.map((reviewer, i) => {
            return <Admin.ReviewerRow
              key={reviewer.id + i}
              reviewer={reviewer}
            />
        })}
      </section>
    )
  }
}
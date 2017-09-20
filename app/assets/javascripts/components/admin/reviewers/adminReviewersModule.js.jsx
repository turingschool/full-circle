class AdminReviewersModule extends React.Component {
  render() {
    return (
      <section className='reviewers-frame'>
        { this.props.reviewers.map((reviewer, i) => {
            return <AdminReviewerRow
              key={reviewer.id + i}
              reviewer={reviewer}
            />
        })}
      </section>
    )
  }
}
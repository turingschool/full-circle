class AdminCohortApplicationList extends React.Component {

  render() {
    return(
      <section className='cohort-applications-list'>
        {this.props.applications.map((app) => {
          return <SelectableTextField
            key={app.user.id}
            texts={[
              { displayText: `${app.totalAverage || 0} (${app.numberOfReviews}/${app.reviews.length})`, classes: app.numberOfReviews != app.reviews.length ? 'warning' : ''},
              { displayText: app.user.email},
              { displayText: app.state}]}
            width='100%'
            returnKey='application'
            returnValue={app}
            handleAction={this.props.handleAction} />
        })}
      </section>
    )
  }
}

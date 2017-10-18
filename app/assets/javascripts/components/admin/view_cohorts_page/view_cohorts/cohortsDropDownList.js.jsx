class CohortsDropDownList extends React.Component {

  render() {
    return(
      <section>
        {this.props.cohorts.map((cohort, i) => {
          return <AdminCohortRow key={i}
            cohort={cohort}
            handleAction={this.props.handleAction} />
        })}
      </section>
    )
  }
}
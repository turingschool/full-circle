class AdminViewCohortsSection extends React.Component {

  render() {
    return(
      <section className='view-cohorts'>
        <CohortsDropDownList
          cohorts={this.props.cohorts}
          handleAction={this.props.handleAction} />

      </section>
    )
  }
}
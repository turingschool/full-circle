class AdminViewCohortsSection extends React.Component {

  render() {
    return(
      <section className='view-cohorts'>
        <DropDownMenu
          list={this.props.cohorts}
          handleAction={this.props.handleAction} />

      </section>
    )
  }
}
class StudentCurrentCohort extends React.Component {

  render() {
    return(
      <div onClick={this.props.newApplication}>{this.props.currentCohort.title}</div>
    )
  }
}
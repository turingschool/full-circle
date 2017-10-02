class AdminCohortRow extends React.Component {

  render(){
    return(
      <div className='cohort-row'>
        {this.props.cohort.title}
      </div>
    )
  }
}
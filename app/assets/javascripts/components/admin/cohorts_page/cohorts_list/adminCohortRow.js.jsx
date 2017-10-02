class AdminCohortRow extends React.Component {

  render(){
    return(
      <div className='cohort-row'
        onClick={this.props.changeCohort.bind(this,
          {cohort: this.props.cohort}
        )}>

        {this.props.cohort.title}
      </div>
    )
  }
}
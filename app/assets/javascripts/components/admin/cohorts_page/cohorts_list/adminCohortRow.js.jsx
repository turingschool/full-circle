class AdminCohortRow extends React.Component {

  render(){
    return(
      <div className='cohort-row'
        onClick={this.props.changeCohort.bind(this,
          { cohort: this.props.cohort,
            message: 'Changed Cohort' }
        )}>

        {this.props.cohort.title}
      </div>
    )
  }
}
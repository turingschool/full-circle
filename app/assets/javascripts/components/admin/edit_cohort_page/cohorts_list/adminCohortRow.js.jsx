class AdminCohortRow extends React.Component {

  render(){
    return(
      <div className={['cohort-row', this.props.selected].join(' ').trim()}
        onClick={this.props.handleAction.bind(this,
          { cohort: this.props.cohort,
            message: 'Changed Cohort' }
        )}>

        {this.props.cohort.title}
      </div>
    )
  }
}
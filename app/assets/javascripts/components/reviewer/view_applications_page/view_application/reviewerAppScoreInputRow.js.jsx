class ReviewerAppScoreInputRow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      score_range: Array.from(new Array(11),(val,index)=>index)
    }
  }
  
  renderSelectOrValues(){
    if (!this.props.reviewLockStatus) {
      return (<select className='readOnlyfalse' 
        value={this.props.Value}
        onChange={this.props.handleChange.bind(this, this.props.Param)}>
        { this.state.score_range.map(value => <option key={value} value={value}>{value}</option>) }
      </select>)
    } else {
      return (<span className='readOnlytrue'> {this.props.Value} </span>)
    }  
  };
  
  render() {
    return(
      <div className='form-row'>
        <label>
          {this.props.Text}
          {this.renderSelectOrValues()}
        </label>
      </div>
    )
  }
}
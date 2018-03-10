class ReviewerAppScoreInputRow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      score_range: Array.from(new Array(11),(val,index)=>index)
    }
  }
  

  render() {
    return(
      <div className='form-row'>
        <label>
          {this.props.Text}
          <select className={'readOnly' + this.props.readOnly} 
            value={this.props.Value}
            onChange={this.props.handleChange.bind(this, this.props.Param)}>
            { this.state.score_range.map(value => <option key={value} value={value}>{value}</option>) }
          </select>
        </label>

      </div>
    )
  }
}
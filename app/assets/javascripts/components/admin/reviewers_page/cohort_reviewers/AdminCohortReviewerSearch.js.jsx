class AdminCohortReviewerSearch extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      search: ""
    }
  }
  
  options(verb, body = {}) {
    return {
      body: body,
      method: verb,
      headers: { 'Authorization': this.props.authorization,
                 'Content-Type': "application/json" }
    }
  }
  
  handleChange(key, event) {
    this.setState( {[key]: event.target.value} )
  }
  
  filteredSearch() {
    let search = this.state.search.toLowerCase()
    let length = search.length
  
    return this.props.cohort.non_reviewers.filter((reviewer) => {
      return (reviewer.name.toLowerCase().substr(0, length) == search)
    })
  }
  
  render() {
    return(
      <section className='reviewer-search-box'>
        <h3>Unselected Reviewers</h3>
        <section className='search-input'>
          <input type='text'
            readOnly={this.props.readOnly}
            className={['readOnly', this.props.readOnly].join('')}
            placeholder={"Search for a reviewer"}
            onChange={this.handleChange.bind(this, 'search')} />
        </section>

        <section className='search-results'>
          {this.filteredSearch().map((reviewer, i) => {
            return <AdminCohortReviewerSearchRow key={i}
              reviewer={reviewer}
              applications={this.props.cohort.applications}
              nonReviewers={this.props.cohort.non_reviewers}
              cohort={this.props.cohort}
              readOnly={this.props.readOnly}
              handleAction={this.props.handleAction}
              authorization={this.props.authorization}
            />
          })}
        </section>
      </section>
    )
  }
}
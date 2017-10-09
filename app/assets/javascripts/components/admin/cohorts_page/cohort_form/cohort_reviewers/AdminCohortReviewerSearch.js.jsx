class AdminCohortReviewerSearch extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      search: "",
      allReviewers: []
    }
  }

  componentDidMount() {
    this.getAllReviewers()
  }

  handleChange(key, event) {
    this.setState( {[key]: event.target.value} )
  }

  render() {
    return(
      <section className='reviewer-search'>
        <input type='text' onChange={this.handleChange.bind(this, 'search')} />

      {this.filteredSearch().map((reviewer, i) => {
        return <span key={i}>{reviewer.name}</span>
      })}
      </section>
    )
  }

  filteredSearch() {
    let search = this.state.search.toLowerCase()
    let length = search.length

    return this.state.allReviewers.filter((reviewer) => {
      return (reviewer.name.toLowerCase().substr(0, length) == search)
    })
  }

  getAllReviewers() {
    ping('/api/v1/admin/reviewers', this.options('GET'))
      .then((response) => {
        response.json().then((json) => {

        this.setState({allReviewers: json})
        })
      })
      .catch((error) => {
      })
  }

  options(verb, body = {}) {
    return {
      body: body,
      method: verb,
      headers: { 'Authorization': this.props.authorization,
                 'Content-Type': "application/json" }
    }
  }
}
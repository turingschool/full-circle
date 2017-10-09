class AdminCohortReviewerSearch extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      search: ""
    }
  }

  handleChange(key, event) {
    this.setState( {[key]: event.target.value} )
  }

  render() {
    return(
      <section className='reviewer-search'>
        <input type='text' onChange={this.handleChange.bind(this, 'search')} />

      this.filteredSearch().map((reviewer) => {
        return <span>{reviewer.name}</span>
      })
      </section>
    )
  }

  filteredSearch() {
    let search = this.state.search.toLowerCase()
    let length = search.length()

    return this.props.allReviewers.filter((reviewer) => {
      return (reviewer.name.toLowerCase().substr(0, length) == search)
    })
  }
}
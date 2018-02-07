class DropDownMenu extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dropDown: true
    }
  }

  handleAction(action) {
    this.setState(action)
  }
  
  list() {
    return this.props.list.filter((item) => {
      return item.id != this.props.header.id
    })
  }
  
  render() {
    return(
      <section className='circle-dropdown-menu'>
        <DropDownMenuHeader
          label={this.props.label}
          header={this.props.header}
          toggle={this.handleAction.bind(this)} />

        <DropDownMenuList
          label={this.props.label}
          list={this.list()}
          dropDown={this.state.dropDown}
          toggle={this.handleAction.bind(this)}
          handleAction={this.props.handleAction} />

      </section>
    )
  }
}
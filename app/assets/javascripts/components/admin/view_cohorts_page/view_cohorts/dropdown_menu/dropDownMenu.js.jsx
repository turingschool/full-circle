class DropDownMenu extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dropDown: false,
      header: this.props.list[0],
      list: this.props.list
    }
  }

  render() {
    return(
      <section className='dropdown-menu'>
        <DropDownMenuHeader
          header={this.state.header}
          toggle={this.toggleDropDown.bind(this)} />

        <DropDownMenuList
          list={this.state.list}
          drop={this.state.dropDown}
          toggle={this.toggleDropDown.bind(this)}/>

      </section>
    )
  }

  toggleDropDown(action) {
    debugger
  }


}
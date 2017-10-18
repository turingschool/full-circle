class DropDownMenuList extends React.Component {

  render() {
    return(
      <section className={['list', this.props.drop].join(' ')}>
        Hello!
      </section>
    )
  }
}
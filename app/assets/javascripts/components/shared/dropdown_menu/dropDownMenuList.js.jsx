class DropDownMenuList extends React.Component {

  render() {
    return(
      <section className={['list', this.props.dropDown].join(' ')}
        onMouseLeave={this.props.toggle.bind(this, {dropDown: true})}>
        {this.props.list.map((item, i) => {
          return <DropDownMenuItem key={i}
            item={item}
            label={this.props.label}
            handleAction={this.props.handleAction} />
        })}
      </section>
    )
  }
}
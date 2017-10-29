class LinkBtn extends React.Component {
  render() {
    return (
      <a href={this.props.Url}
        className={['btn', this.props.readOnly].join(' ').trim()}>
        {this.props.Text}
      </a>
    )
  }
}
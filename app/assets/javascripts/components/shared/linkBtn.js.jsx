class LinkBtn extends React.Component {
  render() {
    return (
      <div className={['btn', this.props.readOnly].join(' ').trim()} />
        <a href={this.props.Url}
          {this.props.Text}
        </a>
      </div>
    )
  }
}
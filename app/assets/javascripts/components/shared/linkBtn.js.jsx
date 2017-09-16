class LinkBtn extends React.Component {
  render() {
    return (
      <div className='login'>
        <a href={this.props.Url} className='btn'>
          {this.props.Text}
        </a>
      </div>
    )
  }
}
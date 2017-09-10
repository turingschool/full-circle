class Btn extends React.Component {
  render() {
    return (
      <a href={this.props.Url} className='btn'>
        {this.props.Text}
      </a>
    )
  }
}
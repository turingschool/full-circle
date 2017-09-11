class ApplicationModule extends React.Component {

  render() {
    return (
      <div className={ ['application', this.props.app.status].join(' ') }>
        <span>{this.props.app.id}</span>
        <span>{this.props.app.status}</span>
      </div>
    )
  }
}
class ApplicationModule extends React.Component {

  render() {
    return (
      <div className={['application']}>
        <span>{this.props.app.id}</span>
        <span>{this.props.app.status}</span>
      </div>
    )
  }
}
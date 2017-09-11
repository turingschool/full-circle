class ApplicationModule extends React.Component {

  constructor(props) {
    super(props)

    this.application = this.props.application
  }

  render() {
    return (
      <div className={['application']}>
        <span>{this.application.id}</span>
      </div>
    )
  }
}
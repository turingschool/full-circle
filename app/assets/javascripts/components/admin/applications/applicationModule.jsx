class ApplicationModule extends React.Component {

  constructor(props) {
    super(props)

    this.app = this.props.app
  }

  render() {
    return (
      <div className={['application']}>
        <span>{this.app.id}</span>
      </div>
    )
  }
}
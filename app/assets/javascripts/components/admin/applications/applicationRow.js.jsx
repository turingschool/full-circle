class AdminApplicationRow extends React.Component {

  constructor(props) {
    super(props)

    this.app = this.props.app
  }

  render() {
    return (
      <div className={ ['application', this.app.status].join(' ') }
        onClick={this.props.onClick.bind(this, {appInFocus: this.app})} >
        <span>{this.app.id}</span>
        <span>{this.app.status}</span>
      </div>
    )
  }
}
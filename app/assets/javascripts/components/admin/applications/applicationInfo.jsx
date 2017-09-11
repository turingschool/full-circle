class ApplicationInfo extends React.Component {
  render() {
    return (
      <section className='application-info-frame'>
        <span>{this.props.app.id}</span>
      </section>
    )
  }
}
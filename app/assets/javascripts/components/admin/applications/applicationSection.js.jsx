class ApplicationSection extends React.Component {

  render() {
    return (
      <section className='main-vert-frame applications'>
        <ApplicationInfo app={this.props.app} />
        <ApplicationsModule cohort={this.props.cohort} {...this.props} />
      </section>
    )
  }
}
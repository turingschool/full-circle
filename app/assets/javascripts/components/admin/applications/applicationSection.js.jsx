Admin.ApplicationSection = class ApplicationSection extends React.Component {

  render() {
    return (
      <section className='main-vert-frame applications'>
        <Admin.ApplicationInfo app={this.props.app} />
        <Admin.ApplicationsModule cohort={this.props.cohort} {...this.props} />
      </section>
    )
  }
}
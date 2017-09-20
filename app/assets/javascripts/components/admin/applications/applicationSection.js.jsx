class AdminApplicationSection extends React.Component {

  render() {
    return (
      <section className='main-vert-frame applications'>
        <AdminApplicationInfo app={this.props.app} />
        <AdminApplicationsModule cohort={this.props.cohort} {...this.props} />
      </section>
    )
  }
}
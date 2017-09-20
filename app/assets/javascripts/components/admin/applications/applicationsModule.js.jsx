class AdminApplicationsModule extends React.Component {

  render() {
    return (
      <section className='applications-frame'>
        {this.props.cohort.applications.map((app) => {
          return <AdminApplicationRow
            key={app.id}
            app={app}
            onClick={this.props.handleChange} />
        })}
      </section>
    )
  }
}
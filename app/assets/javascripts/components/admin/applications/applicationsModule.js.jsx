Admin.ApplicationsModule = class ApplicationsModule extends React.Component {

  render() {
    return (
      <section className='applications-frame'>
        {this.props.cohort.applications.map((app) => {
          return <Admin.ApplicationRow
            key={app.id}
            app={app}
            onClick={this.props.handleChange} />
        })}
      </section>
    )
  }
}
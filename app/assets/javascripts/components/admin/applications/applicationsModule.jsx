class ApplicationsModule extends React.Component {

  render() {
    return (
      <section className='applications-frame'>
        {this.props.cohort.applications.map((app) => {
          return <ApplicationModule key={app.id} app={app} />
        })}
      </section>
    )
  }
}
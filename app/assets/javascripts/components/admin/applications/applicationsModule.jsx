class ApplicationsModule extends React.Component {

  constructor(props) {
    super(props)
    this.state = {cohort: this.props.cohort}
  }

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
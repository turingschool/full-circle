class ApplicationSection extends React.Component {

  render() {
    return (
      <section className='main-vert-frame applications'>
        <ApplicationsModule cohort={this.props.cohort}/>
      </section>
    )
  }
}
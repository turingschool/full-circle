class CohortsSection extends React.Component {
  render() {
    return (
      <section className='main-horz-frame cohorts'>
        <CohortsModule cohorts={this.props.cohorts} {...this.props}/>
      </section>
    )
  }
}
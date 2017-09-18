class ApplicationInfo extends React.Component {


  render() {
    return (
      <section className='application-info-frame'>
        <section className='user-info'>
          <span>{this.props.app.id}</span>
        </section>

        <p className='essay-preview'>{this.props.app.essay}</p>
      </section>
    )
  }
}
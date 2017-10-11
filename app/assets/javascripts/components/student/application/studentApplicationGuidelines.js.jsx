class StudentApplicationGuidelines extends React.Component {

  constructor(props) {
    super(props)

    this.guidelines = this.props.guidelines
  }

  render() {
    return(
      <section className={['application-guidelines', this.props.visable].join(' ')}>
        <section className='body'
          dangerouslySetInnerHTML={{__html: this.props.guidelines}}>
        </section>

        <section className='confirm-submission'>
          <ClickBtn Text='Got It'
            onClick={this.props.toggleGuidelines.bind(this, {
              guidelines: 'disable'
            })} />
        </section>
      </section>
    )
  }
}
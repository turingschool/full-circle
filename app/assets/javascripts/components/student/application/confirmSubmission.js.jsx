class ConfirmSubmission extends React.Component {

  render() {
    return(
      <section className={['confirm-submission', this.props.confirm].join(' ')}>
        <p>{this.props.essay}</p>
      </section>
    )
  }
}
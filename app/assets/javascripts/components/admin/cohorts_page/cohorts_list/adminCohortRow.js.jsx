const AdminCohortRow = ({ handleAction, selected, cohort }) => {
  const { title } = cohort
  return(
  <button className={`cohort-row ${selected}`}
    onClick={() => handleAction({ cohort, message: 'Changed Cohort'})}>
    {title}
  </button>
  )
}

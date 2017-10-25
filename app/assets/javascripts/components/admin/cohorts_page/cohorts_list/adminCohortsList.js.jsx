const AdminCohortsList = ({ cohort, cohorts, handleAction  }) => {
const { id } = cohort;
const mappedAdminRow = cohorts.map( singleCohort => (
   <AdminCohortRow
      cohort={cohort}
      selected= { id === singleCohort.id ? 'selected' : null }
      handleAction ={ handleAction }
      key={singleCohort.id}
    /> )
)
 return (
   <section>
     { mappedAdminRow }
   </section>
 )
};

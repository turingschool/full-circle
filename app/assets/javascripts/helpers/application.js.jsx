function sortedWithReviewCount(applications) {
  appsWithScore = applications.map(application => Object.assign(application, scoreAndReviewers(application)))
  return appsWithScore.sort((a,b) => {
    if ((a.state === "draft" && b.state === "submitted") || a.numberOfReviews < b.numberOfReviews) {
      return 1;
    } else if ((a.state === "submitted" && b.state === "draft") || a.numberOfReviews > b.numberOfReviews) {
      return -1;
    } else {
      return b.totalAverage - a.totalAverage
    }
  })
}

function scoreAndReviewers(application) {
  let numberOfReviews = 0;
  let totalSum = 0;

  application.reviews.forEach(review => {
    if (review.status === "reviewed" || review.status === "locked") {
      numberOfReviews++
      totalSum += review.score_card.total
    }
  })

  return {numberOfReviews, totalAverage: parseFloat((totalSum/numberOfReviews).toFixed(2))}
}

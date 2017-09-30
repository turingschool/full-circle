function ping(url, options) {
  return fetch(url, options)
    .then(handleErrors)
    .then((data) => {
      return data
    })
}

function handleErrors(response) {
  if (!response.ok) {
    throw response
  }
  return response
}
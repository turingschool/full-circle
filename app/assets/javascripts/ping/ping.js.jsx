function ping(url, options) {
  return fetch(url, options)
    .then(handleErrors)
    .then((data) => {
      return data
    })
}

function handleErrors(response) {
  if (response.status === 401) {
    window.alert('Session Expired. Please Log In.')
    window.location.assign('/')
  }
  if (!response.ok) {
    throw response
  }
  return response
}
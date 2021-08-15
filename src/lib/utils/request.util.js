import axios from 'axios'

const requestService = {
  getRequest,
  postRequest,
  patchRequest,
  deleteRequest,
  putRequest,
  handleResponse,
}

function createHeader(protect, authUser, typeContent = null) {
  const headers = {}
  headers['Content-type'] = typeContent === null ? 'application/json' : typeContent
  if (protect) headers.Authorization = `Bearer ${authUser}`
  return headers
}

function returnResponse(response, error) {
  let obj = {}
  if (response) {
    const res = {
      status: response.status,
      data: response.data,
    }
    obj = { error: false, ...res }
  } else {
    let err = {}
    if (error.response && error.response.status && error.response.data) {
      err = {
        status: error.response.status,
        data: error.response.data,
      }
    } else {
      err = {
        status: 500,
        data: { message: 'Internal Error' },
      }
    }

    obj = { error: true, ...err }
  }
  return obj
}

async function getRequest(
  urlroot,
  header = { protect: false, authUser: null, typeContent: null },
  params = {},
) {
  const Header = createHeader(header.protect, header.authUser, header.typeContent)
  const { response, error } = await axios
    .get(`${urlroot}`, { headers: Header, params })
    // eslint-disable-next-line no-shadow
    .then(response => ({ response }))
    // eslint-disable-next-line no-shadow
    .catch(error => ({ error }))
  return returnResponse(response, error)
}

async function postRequest(
  urlroot,
  data,
  header = { protect: null, authUser: null, typeContent: null },
) {
  const { response, error } = await axios
    .post(`${urlroot}`, data, {
      headers: createHeader(header.protect, header.authUser, header.typeContent),
    })
    // eslint-disable-next-line no-shadow
    .then(response => ({ response }))
    // eslint-disable-next-line no-shadow
    .catch(error => ({ error }))
  return returnResponse(response, error)
}

async function patchRequest(
  urlroot,
  data,
  header = { protect: null, authUser: null, typeContent: null },
) {
  const { response, error } = await axios
    .patch(`${urlroot}`, data, {
      headers: createHeader(header.protect, header.authUser, header.typeContent),
    })
    // eslint-disable-next-line no-shadow
    .then(response => ({ response }))
    // eslint-disable-next-line no-shadow
    .catch(error => ({ error }))
  return returnResponse(response, error)
}
async function deleteRequest(
  urlroot,
  header = { protect: null, authUser: null, typeContent: null },
) {
  const { response, error } = await axios
    .delete(`${urlroot}`, {
      headers: createHeader(header.protect, header.authUser),
    })
    // eslint-disable-next-line no-shadow
    .then(response => ({ response }))
    // eslint-disable-next-line no-shadow
    .catch(error => ({ error }))
  return returnResponse(response, error)
}

async function putRequest(
  urlroot,
  data,
  header = { protect: null, authUser: null, typeContent: null },
) {
  const { response, error } = await axios
    .put(`${urlroot}`, data, {
      headers: createHeader(header.protect, header.authUser),
    })
    // eslint-disable-next-line no-shadow
    .then(response => ({ response }))
    // eslint-disable-next-line no-shadow
    .catch(error => ({ error }))
  return returnResponse(response, error)
}

function handleResponse(response, callBackSuccess, callBackFailure) {
  const { data } = response
  const { status } = response
  if (response.error) {
    callBackFailure(data, status)
  } else {
    callBackSuccess(data, status)
  }
}

export default requestService

const requestLoading = (constVal, isLoading) => {
  return {
    type: constVal,
    payload: {
      loading: isLoading,
    },
  }
}

const dispatchAction = (action, payload) => {
  const obj = { type: action }
  if (payload) obj.payload = payload
  console.log(obj)
  return obj
}

const succes = (res, action) => {
  return {
    type: action,
    payload: res,
  }
}

const failure = (err, action) => {
  return {
    type: action,
    payload: err,
  }
}

export { requestLoading, succes, failure, dispatchAction }

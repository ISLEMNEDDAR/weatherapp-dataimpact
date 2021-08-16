export const typecontent = {
  json: 'application/json',
  formData: 'multipart/form-data',
  protectedRoute: (token, type) => ({ protect: true, authUser: token, typeContent: type }),
  noProtectedRoute: type => ({ protect: false, authUser: null, typeContent: type }),
}

export const appendFormData = data => {
  const formData = new FormData()
  Object.keys(data).forEach(key => {
    console.log(key)
    console.log(data[key])
    formData.append([key], data[key])
  })
  return formData
}

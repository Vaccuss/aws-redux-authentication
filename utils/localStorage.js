export const sessionStorageRetrieveAuth = () => {
  return JSON.parse(sessionStorage.getItem('auth'))
}

export const sessionStorageSetAuth = (data) => {
  sessionStorage.setItem('auth', JSON.stringify(data))
}


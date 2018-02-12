const logout = (cognitoUser) => {
  cognitoUser.signOut()
}

const globalSignout = (cognitoUser) => {
  cognitoUser.globalSignOut(callback)
}

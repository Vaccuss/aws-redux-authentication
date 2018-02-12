export const logoutAction = (cognitoUser, dispatcher) => dispatcher({
  type: 'SIMPLE_LOGOUT',
  cognitoUser: cognitoUser,
})



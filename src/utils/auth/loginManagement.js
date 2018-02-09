export const cognitoAuthExistingUser = (user, authDetails) => {
  return new Promise((resolve, reject) =>
    user.authenticateUser(authDetails, {
      onSuccess: res => resolve(res),
      onFailure: err => reject(err),
      newPasswordRequired: (userAttr, reqUserAttr) =>
        resolve('newPasswordRequired', userAttr, reqUserAttr)
    })
  )
}



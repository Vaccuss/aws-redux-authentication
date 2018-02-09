const userConfirmPassword = (cognitoUser, verificationCode, newPassword) => {
  cognitoUser.confirmPassword(verificationCode, newPassword, {
    onSuccess () {
      console.log('Password confirmed!')
    },
    onFailure (err) {
      console.log('Password not confirmed!')
    }
  })
}

const unauthenticatedPasswordReset = (cognitoUser) => {
  cognitoUser.forgotPassword({
    onSuccess: function (data) {
      // successfully initiated reset password request
      console.log('CodeDeliveryData from forgotPassword: ' + data)
    },
    onFailure: function (err) {
      alert(err)
    },
    // Optional automatic callback
    inputVerificationCode: null
  })
}

const passwordReset = (cognitoUser, oldPassword, newPassword) => {
  cognitoUser.changePassword(oldPassword, newPassword, (err, result) => {
    if (err) {
      alert(err)
      return
    }
    // TODO Route to /login
    console.log('call result: ' + result)
  })
}

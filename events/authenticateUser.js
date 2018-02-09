import { cognitoAuthExistingUser } from '../utils/auth/loginManagement'
import { lensProp, set } from 'ramda'
import {
  CognitoUser as User,
  AuthenticationDetails as Details,
} from 'amazon-cognito-identity-js'
import { sessionStorageSetAuth } from '../utils/localStorage'

export const submitAuthUserAction = ({pool}, loginData) => {
  let user = new User({Username: loginData.Username, Pool: pool})
  let authDetails = new Details(loginData)
  return cognitoAuthExistingUser(user, authDetails).then(
    (res) => responseAuthUserAction(res, user),
    err => alert(err),
  )
}

export const responseAuthUserAction = (res, user, dispatcher) => dispatcher({
  type: 'AUTH_EXISTING_RESPONSE',
  user: user,
})

export const authUserReducer = (state, {user, response}) => {
  let userL = lensProp('user')
  let sessionL = lensProp('session')
  // Has side effect of updating localStorage
  if (response === 'newPasswordRequired') {
    return set(sessionL, response, set(userL, user, state))
  }
  else {
    let newState = set(sessionL, response, set(userL, user, state))
    sessionStorageSetAuth(newState)
    return newState
  }
}

export const submitNewPasswordAction = ({user}, password) => {
  return user.completeNewPasswordChallenge(password)
}

import {lensProp, set} from 'ramda'
import {sessionStorageSetAuth} from '../utils/localStorage'
import {cognitoAuthExistingUser} from "../utils/auth/loginManagement";
import {
    CognitoUser as User,
    AuthenticationDetails as Details,
} from 'amazon-cognito-identity-js'

// Login action
export const loginAction = ({pool}, loginData) => {
    let user = new User({Username: loginData.Username, Pool: pool})
    let authDetails = new Details(loginData)
    return cognitoAuthExistingUser(user, authDetails).then(
        (res) => responseAuthUserAction(res, user),
        err => alert(err),
    )
}

// Handle async action
export const responseAuthUserAction = (res, user, dispatcher) => dispatcher({
    type: 'AUTH_EXISTING_RESPONSE',
    user: user,
})

// Authentication reducer
export const authUserReducer = (state, {user, response}) => {
    let userL = lensProp('user')
    let sessionL = lensProp('session')
    let newState = set(sessionL, response, set(userL, user, state))
    // Has side effect of updating localStorage
    return (response === 'newPasswordRequired') ? newState : () => {
        sessionStorageSetAuth(newState)
        return newState
    }

}


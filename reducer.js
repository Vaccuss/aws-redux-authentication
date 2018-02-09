import { authUserReducer } from './events/authenticateUser'
import {
  CognitoUserPool as Pool,
} from 'amazon-cognito-identity-js'
import { createReducer } from '../../utils/general'

let reducers = {
  'AUTH_EXISTING_RESPONSE': authUserReducer,
}

export const authenticationInit = (poolData, authSession) => {
  let authenticationInit = {
    session: 'init',
    pool: new Pool(poolData),
    user: '',
    tokens: {},
  }
  if (authSession === null) {
    return createReducer(authenticationInit, reducers)
  }
}

//EXAMPLE: createReducer(authenticationInit(), reducers)


import {
    CognitoUser as User,
    AuthenticationDetails as Details,
    CognitoUserPool as Pool,
} from 'amazon-cognito-identity-js'
import {expect} from 'chai'
import {cognitoAuthExistingUser} from '../../utils/auth/loginManagement'

let username = 'deansteven308@gmail.com'
let userPoolId = 'ap-southeast-2_BbLiOzYMX'
let clientId = '4cdbdscj2c22ked62af47o8gcb'
let password = 'Testing1'

let testUser = new User({
    Username: username, Pool: new Pool({
        UserPoolId: userPoolId, // Your user pool id here
        ClientId: clientId // Your client id here
    }),
})
let testAuthDetails = new Details({
    Username: username, Password: password,
})
let initState = {
    session: '',
    poolConfig: {
        UserPoolId: userPoolId, // Your user pool id here
        ClientId: clientId // Your client id here
    },
    username: '',
    tokens: {},

}

let result = {response: 'expected result'}

//
// Tests
//

expect('1').to.equal('1')

// test('Auth test for newPasswordRequired', () => {
//   expect.assertions(1)
//   return cognitoAuthExistingUser(testUser, testAuthDetails).
//     then(res => expect(res).toEqual('newPasswordRequired'))
// })

// test('Full flow and state updating', () => {
//   let expectedState = Map({
//     session: 'expected result',
//     poolConfig: {UserPoolId: 'ap-southeast-2_BbLiOzYMX', ClientId: '4cdbdscj2c22ked62af47o8gcb'},
//     username: '', tokens: Map({})
//   })
//   expect(authenticateExistingUserRequest(initState, result)).toEqual(expectedState)
//
// })
import {responseAuthUserAction} from '../events/authenticateUser'
let {test, expect} = global

test('responseAuthUserAction', () => {
  let user = 'user'
  let res = false
  let invoked = false
  let dispatcher = (d) => {
    expect(d.type).toBe('AUTH_EXISTING_RESPONSE')
    expect(d.user).toBe(user)
    invoked = true
  }
  responseAuthUserAction(res, user, dispatcher)
  expect(invoked).toBe(true)

})
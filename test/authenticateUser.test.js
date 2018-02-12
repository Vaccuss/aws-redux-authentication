import {expect} from 'chai'
import {responseAuthUserAction} from '../src/events/authenticateUser'


let user = 'user'
let res = false
let invoked = false
let dispatcher = (d) => {
    expect(d.type).to.equal('AUTH_EXISTING_RESPONSE')
    expect(d.user).to.equal(user)
    invoked = true
}
responseAuthUserAction(res, user, dispatcher)
expect(invoked).to.equal(true)

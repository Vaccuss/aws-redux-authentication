import React from 'react'
import {authenticationReducer} from "./reducer";
import {loginAction} from "./events/authenticateUser";
import {logoutAction} from "./events/logoutUser";
import {newPasswordAction} from "./events/newPassword";


// Action API
export {
    authenticationReducer, //Reducer builder
    loginAction,
    logoutAction,
    newPasswordAction
}

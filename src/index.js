import React from 'react'
import {authenticationInit} from "./reducer";
import {submitAuthUserAction} from "./events/authenticateUser";
import {logoutAction} from "./events/logoutUser";

// Action API
export default {
    authenticationReducers : authenticationInit
    submitLogin: submitAuthUserAction,
    submitLogout: logoutAction
}
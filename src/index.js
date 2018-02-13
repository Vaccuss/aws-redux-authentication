import React from 'react'
import {authenticationInit} from "./reducer";
import {submitAuthUserAction} from "./events/authenticateUser";
import {logoutAction} from "./events/logoutUser";
import {submitNewPasswordAction} from "../dist/events/newPassword";


// Action API
export {
    authenticationInit, //Reducer builder
    submitAuthUserAction,
    logoutAction,
    submitNewPasswordAction
}

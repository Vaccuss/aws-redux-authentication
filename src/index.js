import React from 'react'
import {authenticationInit} from "./reducer";
import {submitAuthUserAction} from "./events/authenticateUser";
import {logoutAction} from "./events/logoutUser";
import {submitNewPasswordAction} from "../dist/events/newPassword";

// Reducer Hook
export const authenticationReducers = authenticationInit

// Action API
export const submitLogin = submitAuthUserAction
export const submitLogout = logoutAction
export const submitnewPassword = submitNewPasswordAction

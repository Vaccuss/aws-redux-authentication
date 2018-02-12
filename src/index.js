import React from 'react'
import {authenticationInit} from "./reducer";
import {submitAuthUserAction} from "./events/authenticateUser";
import {logoutAction} from "./events/logoutUser";

// Action API
export const authenticationReducers = authenticationInit
export const submitLogin = submitAuthUserAction
export const submitLogout = logoutAction

import React from 'react'
import {authenticationInit} from "./reducer";
import {submitAuthUserAction} from "./events/authenticateUser";
import {logoutAction} from "./events/logoutUser";

// Add to combine reducers
// eg { authentication : authenticationReducers(poolData)}
export const authenticationReducers = authenticationInit

// Action API
export const submitLogin = submitAuthUserAction
export const submitLogout = logoutAction

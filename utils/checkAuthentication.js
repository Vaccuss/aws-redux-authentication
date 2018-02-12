export const isAuthenticated = (session) => {
    // VERY naive implementation to be changed
    // Todo: rework this so it actually checks for CognitoUserSession.
    return !(typeof session === typeof ' ')
}
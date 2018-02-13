

// New password handler
export const newPasswordAction = ({user}, password) => {
    return user.completeNewPasswordChallenge(password)
}
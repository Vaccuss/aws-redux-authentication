

// New password handler
export const submitNewPasswordAction = ({user}, password) => {
    return user.completeNewPasswordChallenge(password)
}
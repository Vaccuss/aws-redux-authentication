import AWSCognito from 'amazon-cognito-identity-js'

export const processAttributesUtil = (attr) => {
  return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(
    attr)
}

export const retrieveAuthenticatedAttributes = (cognitoUser) =>
  cognitoUser.getUserAttributes((err, result) => {
    if (err) {
      alert(err)
      return
    }
    return result.map(item => item.getValue())
    // for (i = 0; i < result.length; i++) {
    //   console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
    // }
  })

const updateAuthenticatedAttributes = (attributeList, cognitoUser) => {
  let processedList = attributeList.map(attr => processAttributesUtil(attr))

  cognitoUser.updateAttributes(processedList, (err, result) => {
    if (err) {
      alert(err)
      return
    }
    console.log('call result: ' + result)
  })
}

const delAuthenticatedAttribute = (removeAttrList, cognitoUser) => {
  cognitoUser.deleteAttributes(removeAttrList, (err, result) => {
    if (err) {
      alert(err)
      return
    }
    console.log('call result: ' + result)
  })
}

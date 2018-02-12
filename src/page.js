import React from 'react'
import { Container, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { AuthenticationForm } from '../../views/authenticationView/forms/authForm'
import { changePasswordForm } from '../../views/authenticationView/forms/changePassword'
import { Redirect, withRouter } from 'react-router-dom'
import { mapStateToProps } from '../../utils/general'


const formController = (authDB) => {
  console.log('form controller', authDB)
  switch (authDB.get('session')) {
    case 'init': {
      return AuthenticationForm(authDB)

    }
    case 'newPasswordRequired': {
      return changePasswordForm(authDB)
    }
    default: {
      return <Redirect to={{
        pathname: '/dashboard'
      }}/>
    }
  }
}

const Authenticate = ({authentication}) =>
  <auth>
    <Container text={true}>
      {formController(authentication)}
    </Container>
  </auth>

export default withRouter(connect(mapStateToProps)(Authenticate))

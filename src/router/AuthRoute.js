import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Auth as AuthLayout } from 'layouts'

const AuthRoute = ({ children, ...rest }) => {
  const logged = useSelector(state => state.auth.logged)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !logged ? (
          <AuthLayout> {children}</AuthLayout>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default AuthRoute

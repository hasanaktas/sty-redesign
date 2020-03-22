import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Main as MainLayout } from 'layouts'
const MainRoute = ({ children, ...rest }) => {
  const logged = useSelector(state => state.auth.logged)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        logged ? (
          <MainLayout> {children}</MainLayout>
        ) : (
          <Redirect
            to={{
              pathname: '/giris-yap',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default MainRoute

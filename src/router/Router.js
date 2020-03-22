import React, { useEffect } from 'react'
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useDispatch, useSelector } from 'react-redux'
import * as allActions from 'store/actions'
import AuthRoute from './AuthRoute'
import MainRoute from './MainRoute'
import { HomeView, LoginView, InitializedView, KurumIslemleriView, NotFoundView } from 'views'

const browserHistory = createBrowserHistory()

const RNRouter = () => {
  const initialized = useSelector(state => state.auth.initialized)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allActions.checkUser())
    // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [])

  return initialized ? (
    <Router history={browserHistory}>
      <Switch>
        <AuthRoute path="/giris-yap">
          <LoginView />
        </AuthRoute>
        <MainRoute
          exact
          path="/"
        >
          <HomeView />
        </MainRoute>
        <MainRoute
          exact
          path="/tanimlar/kurum-islemleri"
        >
          <KurumIslemleriView />
        </MainRoute>
        <MainRoute>
          <NotFoundView />
        </MainRoute>
      </Switch>
    </Router>
  ) : (
    <InitializedView />
  )
}

export default RNRouter

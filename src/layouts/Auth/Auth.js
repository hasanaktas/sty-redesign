import React, { Fragment, Suspense } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress, makeStyles } from '@material-ui/core'

import { Topbar } from './components'

const useStyles = makeStyles(theme => ({
  content: {
    height: '100%',
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
}))

const Auth = props => {
  const { children } = props
  const classes = useStyles()

  return (
    <Fragment>
      <Topbar />
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>{children}</Suspense>
      </main>
    </Fragment>
  )
}

Auth.propTypes = {
  route: PropTypes.object,
}

export default Auth

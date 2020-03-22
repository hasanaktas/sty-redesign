import React, { Suspense, useState } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress, makeStyles } from '@material-ui/core'

import { NavBar, TopBar } from './components'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  topBar: {
    zIndex: 2,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: '0 0 auto',
  },
  content: {
    overflowY: 'auto',
    flex: '1 1 auto',
    padding: 20,
  },
}))

const Dashboard = props => {
  const { children } = props

  const classes = useStyles()
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false)

  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true)
  }

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false)
  }

  return (
    <div className={classes.root}>
      <TopBar
        className={classes.topBar}
        onOpenNavBarMobile={handleNavBarMobileOpen}
      />
      <div className={classes.container}>
        <NavBar
          className={classes.navBar}
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
        />
        <main className={classes.content}>
          <Suspense fallback={<LinearProgress />}>{children}</Suspense>
        </main>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  route: PropTypes.object,
}

export default Dashboard

/* eslint-disable no-unused-vars */
import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {
  AppBar,
  IconButton,
  Toolbar,
  Hidden,
  colors,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  search: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit',
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit',
    },
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100,
  },
  searchPopperContent: {
    marginTop: theme.spacing(1),
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
  trialIcon: {
    marginRight: theme.spacing(1),
  },
  notificationsButton: {
    marginLeft: theme.spacing(1),
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600],
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
  logoutIcon: {
    marginRight: theme.spacing(1),
  },
}))

const TopBar = props => {
  const { onOpenNavBarMobile, className, ...rest } = props

  const kurumAdi = useSelector(state => state.auth.user.kurum_adi)
  const kullaniciAdi = useSelector(state => state.auth.user.adi)
  const kullaniciSoyadi = useSelector(state => state.auth.user.soyadi)
  const classes = useStyles()

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
    >
      <Toolbar>
        <Typography style={{ color: '#fff' }}>
          {kullaniciAdi} {kullaniciSoyadi}
        </Typography>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <div className={classes.flexGrow} />
        <Typography style={{ color: '#fff' }}>{kurumAdi}</Typography>
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func,
}

export default TopBar

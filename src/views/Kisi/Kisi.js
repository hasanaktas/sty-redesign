import React from 'react';
import { makeStyles } from '@material-ui/core';
import { KisiNavigasyon } from './components';
import { GenelBilgiler } from './views';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },

  kisiNavigasyon: {
    flexShrink: 0,
    width: 300,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabs: {
    padding: 20,
    flexGrow: 1,
    overflow: 'hidden',
  },
  emailDetails: {
    flexGrow: 1,
  },
}));

const Mail = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.kisiNavigasyon}>
        <KisiNavigasyon />
      </div>
      <div className={classes.tabs}>
        <GenelBilgiler />
      </div>
    </div>
  );
};

export default Mail;

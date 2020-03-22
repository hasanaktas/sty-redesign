import React from 'react';
import clsx from 'clsx';
import { IconButton, Tooltip, makeStyles } from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: 'column',
    display: 'flex',
  },
  header: {
    padding: theme.spacing(2),

    height: 68,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
}));

const ViewsContainer = props => {
  const { onBack, children, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.header}>
        <Tooltip title="Geri">
          <IconButton
            className={classes.backButton}
            onClick={onBack}
            size="small"
          >
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
      </div>
      {children}
    </div>
  );
};

export default ViewsContainer;

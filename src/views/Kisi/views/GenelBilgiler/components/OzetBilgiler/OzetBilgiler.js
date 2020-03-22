import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid, makeStyles } from '@material-ui/core';
import { GeneralSettings } from './components';

const useStyles = makeStyles(() => ({
  root: {},
}));

const OzetBilgiler = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [profile] = useState(null);

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
      >
        <GeneralSettings profile={profile} />
      </Grid>
    </Grid>
  );
};

export default OzetBilgiler;

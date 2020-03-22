import React from 'react';
import clsx from 'clsx';
import { Button, Divider, List, ListItem, makeStyles, Avatar, Typography } from '@material-ui/core';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import NavigasyonConfig from './KisiNavigasyonConfig';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.white,
    padding: theme.spacing(2),
  },
  toolbar: {
    padding: theme.spacing(2, 3),
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: theme.palette.primary.main,
  },
  name: {
    marginTop: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  button: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    fontWeight: theme.typography.fontWeightRegular,
  },
  folderIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.icon,
  },
  totalItems: {
    marginLeft: theme.spacing(1),
  },
  newItems: {
    marginLeft: 'auto',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  active: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main,
    '& $folderIcon': {
      color: theme.palette.primary.main,
    },
  },
}));

const KisiNavigasyon = props => {
  const { onFolderOpen, className, ...rest } = props;
  let history = useHistory();
  const { id, tab } = useParams();
  const classes = useStyles();

  const handleTabsChange = value => {
    onFolderOpen();
    history.push(value);
  };

  if (!tab) {
    return <Redirect to={`/kisi/${id}/genel-bilgiler`} />;
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.profile}>
        <Avatar
          alt="Person"
          className={classes.avatar}
        >
          HA
        </Avatar>
        <Typography
          className={classes.name}
          variant="h4"
        >
          Hasan Aktas
        </Typography>
        <Typography variant="body2">16181287970</Typography>
      </div>
      <Divider className={classes.divider} />
      <List>
        {NavigasyonConfig.map((item, index) => {
          const { icon: Icon } = item;
          return (
            <ListItem
              className={classes.listItem}
              key={item.title}
            >
              <Button
                className={clsx(classes.button, {
                  [classes.active]: tab === item.href,
                })}
                fullWidth
                onClick={() => handleTabsChange(item.href)}
              >
                {item.icon && <Icon className={classes.icon} />}
                {item.title}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default KisiNavigasyon;

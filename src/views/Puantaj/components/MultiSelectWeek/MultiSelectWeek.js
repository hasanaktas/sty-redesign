import React, { Fragment, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Button,
  Checkbox,
  FormControlLabel,
  Menu,
  MenuItem
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(theme => ({
  root: {},
  menuItem: {
    padding: 0
  },
  formControlLabel: {
    padding: theme.spacing(0.5, 2),
    width: '100%',
    margin: 0
  }
}));

const MultiSelect = props => {
  const { date, selectedDays, onChange } = props;

  const classes = useStyles();

  const anchorRef = useRef(null);

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <Fragment>
      <Button
        onClick={handleMenuOpen}
        ref={anchorRef}
      >
        Hafta Seç
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorRef.current}
        className={classes.menu}
        onClose={handleMenuClose}
        open={openMenu}
        // eslint-disable-next-line react/jsx-sort-props
        PaperProps={{ style: { width: 250 } }}
      >
        {date.weeks[0].length !== 0 && (
          <MenuItem className={classes.menuItem}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  checked={date.weeks[0].every(i => selectedDays.includes(i))}
                  color="primary"
                  onClick={() => {
                    onChange(0);
                  }}
                />
              }
              label="1. Hafta"
            />
          </MenuItem>
        )}

        {date.weeks[1].length !== 0 && (
          <MenuItem className={classes.menuItem}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  checked={date.weeks[1].every(i => selectedDays.includes(i))}
                  color="primary"
                  onClick={() => {
                    onChange(1);
                  }}
                />
              }
              label="2. Hafta"
            />
          </MenuItem>
        )}
        {date.weeks[2].length !== 0 && (
          <MenuItem className={classes.menuItem}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  checked={date.weeks[2].every(i => selectedDays.includes(i))}
                  color="primary"
                  onClick={() => {
                    onChange(2);
                  }}
                />
              }
              label="3. Hafta"
            />
          </MenuItem>
        )}
        {date.weeks[3].length !== 0 && (
          <MenuItem className={classes.menuItem}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  checked={date.weeks[3].every(i => selectedDays.includes(i))}
                  color="primary"
                  onClick={() => {
                    onChange(3);
                  }}
                />
              }
              label="4. Hafta"
            />
          </MenuItem>
        )}
        {date.weeks[4].length !== 0 && (
          <MenuItem className={classes.menuItem}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  checked={date.weeks[4].every(i => selectedDays.includes(i))}
                  color="primary"
                  onClick={() => {
                    onChange(4);
                  }}
                />
              }
              label="5. Hafta"
            />
          </MenuItem>
        )}
        {date.weeks[5].length !== 0 && (
          <MenuItem className={classes.menuItem}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  checked={date.weeks[5].every(i => selectedDays.includes(i))}
                  color="primary"
                  onClick={() => {
                    onChange(5);
                  }}
                />
              }
              label="6. Hafta"
            />
          </MenuItem>
        )}
      </Menu>
    </Fragment>
  );
};

MultiSelect.propTypes = {
  onChange: PropTypes.func
};

export default MultiSelect;

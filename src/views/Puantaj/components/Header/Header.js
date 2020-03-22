import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Button, makeStyles } from '@material-ui/core';
import Filter from '../Filter';
const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const {
    className,
    onFilter,
    degerguncelle,
    otamatikDoldur,
    ayDegistir,
    tumAlanlariTemizle,
    ...rest
  } = props;
  const [openFilter, setOpenFilter] = useState(false);
  const classes = useStyles();

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          container
          item
          spacing={3}
        >
          <Grid
            item
            xs
          >
            <Button
              color="primary"
              onClick={otamatikDoldur}
              variant="contained"
            >
              Otamatik Doldur
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="primary"
              onClick={() => degerguncelle('+')}
              variant="outlined"
            >
              ÇALIŞMA GÜNÜ (+)
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              onClick={() => degerguncelle('HT')}
              variant="outlined"
            >
              HAFTA TATİLİ (HT)
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              onClick={() => degerguncelle('-')}
              variant="outlined"
            >
              GELMEDi (-)
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              onClick={tumAlanlariTemizle}
              variant="outlined"
            >
              TÜM ALANLARI TEMİZLE
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              onClick={handleFilterOpen}
              variant="contained"
            >
              Hızlı İşlemler
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Filter
        degerguncelle={degerguncelle}
        onClose={handleFilterClose}
        onFilter={onFilter}
        open={openFilter}
      />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;

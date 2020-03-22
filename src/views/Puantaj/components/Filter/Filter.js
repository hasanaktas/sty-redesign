import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  makeStyles,
  Button,
  Collapse,
  Divider,
  Drawer,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { normalMesai, fazlaMesai as fazlaMesaiArray } from 'utils/mesailer';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  drawer: {
    width: 420,
    maxWidth: '100%'
  },
  header: {
    padding: theme.spacing(2, 1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(0, 3),
    flexGrow: 1
  },
  contentSection: {
    padding: theme.spacing(2, 0)
  },
  contentSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer'
  },
  contentSectionContent: {},
  formGroup: {
    padding: theme.spacing(2, 0)
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  field: {
    marginTop: 0,
    marginBottom: 0
  },
  flexGrow: {
    flexGrow: 1
  },
  addButton: {
    marginLeft: theme.spacing(1)
  },
  tags: {
    marginTop: theme.spacing(1)
  },
  minAmount: {
    marginRight: theme.spacing(3)
  },
  maxAmount: {
    marginLeft: theme.spacing(3)
  },
  radioGroup: {},
  actions: {
    padding: theme.spacing(3),
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

const Filter = props => {
  const { open, onClose, onFilter, className, degerguncelle, ...rest } = props;

  const classes = useStyles();

  const [hizliIslemler, setHizliIslemler] = useState(true);
  const [fazlaMesai, setFazlaMesai] = useState(false);
  const [value, setValue] = useState(normalMesai[0].kisaltma);

  const handleHizliIslemler = () => {
    setHizliIslemler(hizliIslemler => !hizliIslemler);
    setFazlaMesai(false);
  };

  const handleFazlaMesai = () => {
    setFazlaMesai(fazlaMesai => !fazlaMesai);
    setHizliIslemler(false);
  };

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <div className={classes.header}>
          <Button onClick={onClose}>
            <CloseIcon className={classes.buttonIcon} />
            Kapat
          </Button>
        </div>
        <div className={classes.content}>
          <div className={classes.contentSection}>
            <div
              className={classes.contentSectionHeader}
              onClick={handleHizliIslemler}
            >
              <Typography variant="h5">Hızlı İşlemler</Typography>
              {hizliIslemler ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Divider />
            <Collapse in={hizliIslemler}>
              <div className={classes.contentSectionContent}>
                <div className={classes.formGroup}>
                  <div className={classes.fieldGroup}>
                    <RadioGroup
                      className={classes.radioGroup}
                      name="projectStatus"
                      onChange={event => setValue(event.target.value)}
                      value={value}
                    >
                      {normalMesai.map((item, index) => {
                        return (
                          <FormControlLabel
                            control={<Radio color="primary" />}
                            key={index}
                            label={`${item.ad} (${item.kisaltma})`}
                            value={item.kisaltma}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className={classes.contentSection}>
            <div
              className={classes.contentSectionHeader}
              onClick={handleFazlaMesai}
            >
              <Typography variant="h5">Fazla Mesai</Typography>
              {fazlaMesai ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Divider />
            <Collapse in={fazlaMesai}>
              <div className={classes.contentSectionContent}>
                <div className={classes.formGroup}>
                  <div className={classes.fieldGroup}>
                    <RadioGroup
                      className={classes.radioGroup}
                      name="projectStatus"
                      onChange={event => setValue(event.target.value)}
                      value={value}
                    >
                      {fazlaMesaiArray.map((item, index) => {
                        return (
                          <FormControlLabel
                            control={<Radio color="primary" />}
                            key={index}
                            label={`${item.ad} (${item.kisaltma})`}
                            value={item.kisaltma}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            fullWidth
            onClick={() => {
              degerguncelle('');
              onClose();
            }}
            variant="contained"
          >
            <DeleteIcon className={classes.buttonIcon} />
            SEÇİLİ ALANLARI TEMİZLE
          </Button>
          <Button
            color="primary"
            fullWidth
            onClick={() => {
              degerguncelle(value);
              onClose();
            }}
            variant="contained"
          >
            UYGULA
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};

export default Filter;

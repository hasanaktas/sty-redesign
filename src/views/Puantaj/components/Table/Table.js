import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Card,
  CardContent,
  Checkbox,
  TextField,
  Table,
  TableBody,
  TableCell,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableHead,
  TableRow,
  TableContainer,
  FormControlLabel,
  useTheme
} from '@material-ui/core';
import MultiSelectWeek from '../MultiSelectWeek';
const useStyles = makeStyles(theme => ({
  content: {
    padding: 0
  },
  tableContainer: {
    minWidth: 700
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));

const Results = props => {
  const {
    className,
    persons,
    selectedPersons,
    setSelectedPersons,
    selectedDays,
    setSelectedDays,

    date
  } = props;
  const theme = useTheme();
  const classes = useStyles();

  function selectPersons(event) {
    const selectedPersons = event.target.checked
      ? persons.map((customer, index) => index)
      : [];

    setSelectedPersons(selectedPersons);
  }

  function selectPerson(event, id) {
    const selectedIndex = selectedPersons.indexOf(id);
    let newselectedPersons = [];

    if (selectedIndex === -1) {
      newselectedPersons = newselectedPersons.concat(selectedPersons, id);
    } else if (selectedIndex === 0) {
      newselectedPersons = newselectedPersons.concat(selectedPersons.slice(1));
    } else if (selectedIndex === selectedPersons.length - 1) {
      newselectedPersons = newselectedPersons.concat(
        selectedPersons.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newselectedPersons = newselectedPersons.concat(
        selectedPersons.slice(0, selectedIndex),
        selectedPersons.slice(selectedIndex + 1)
      );
    }

    setSelectedPersons(newselectedPersons);
  }

  function selectDays(event) {
    const newselectedDays = event.target.checked
      ? date.days.map((day, index) => index)
      : [];

    setSelectedDays(newselectedDays);
  }

  function selectWeek(order) {
    let newselectedDays = [...selectedDays];
    for (const day of date.weeks[order]) {
      const selectedIndex = selectedDays.indexOf(day);

      if (selectedIndex === -1) {
        newselectedDays = newselectedDays.concat(selectedDays, day);
      }
    }
    setSelectedDays(newselectedDays);
  }

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function selectDay(id) {
    const selectedIndex = selectedDays.indexOf(id);
    console.log('id su:' + id);
    console.log('selectedIndex su:' + selectedIndex);
    let newselectedDays = [];

    if (selectedIndex === -1) {
      newselectedDays = newselectedDays.concat(selectedDays, id);
    } else if (selectedIndex === 0) {
      newselectedDays = newselectedDays.concat(selectedDays.slice(1));
    } else if (selectedIndex === selectedDays.length - 1) {
      newselectedDays = newselectedDays.concat(selectedDays.slice(0, -1));
    } else if (selectedIndex > 0) {
      newselectedDays = newselectedDays.concat(
        selectedDays.slice(0, selectedIndex),
        selectedDays.slice(selectedIndex + 1)
      );
    }
    setSelectedDays(newselectedDays);
  }

  return (
    <div className={clsx(classes.root, className)}>
      <Card>
        <CardContent className={classes.content}>
          <TableContainer className={classes.tableContainer}>
            <Table padding="none">
              <TableHead>
                <TableRow>
                  <TableCell
                    colSpan={5}
                    padding="default"
                  >
                    <FormControl
                      className={classes.formControl}
                      color="primary"
                      fullWidth
                      size="small"
                      variant="outlined"
                    >
                      <InputLabel
                        id="demo-simple-select-outlined-label"
                        ref={inputLabel}
                      >
                        Kurum
                      </InputLabel>
                      <Select
                        id="demo-simple-select-outlined"
                        labelId="demo-simple-select-outlined-label"
                        labelWidth={labelWidth}
                        value={0}
                      >
                        <MenuItem value={0}>
                          ANKARA AÇIK CEZA İNFAZ KURUMU
                        </MenuItem>
                        <MenuItem value={1}>
                          ESKİŞEHİR 1 NOLU AÇIK CEZA İNFAZ KURUMU
                        </MenuItem>
                        <MenuItem value={2}>
                          İZMİR 2 NOLU T TİPİ KAPALI CEZA İNFAZ KURUMU
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell
                    colSpan={date.days.length}
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                  >
                    <MultiSelectWeek
                      date={date}
                      onChange={selectWeek}
                      selectedDays={selectedDays}
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedDays.length === date.days.length}
                          color="primary"
                          indeterminate={
                            selectedDays.length > 0 &&
                            selectedDays.length < date.days.length
                          }
                          onChange={selectDays}
                        />
                      }
                      label="Tüm Günler"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="center"
                    colSpan={5}
                    padding="default"
                    rowSpan={2}
                  >
                    <TextField
                      fullWidth
                      label="Kişilerde Ara"
                      size="small"
                      type="search"
                      variant="outlined"
                    />
                  </TableCell>

                  {date.days.map(day => {
                    return (
                      <TableCell
                        align="center"
                        key={day.index}
                      >
                        <Checkbox
                          checked={selectedDays.indexOf(day.index) !== -1}
                          color="primary"
                          onChange={() => selectDay(day.index)}
                          size="small"
                          value={selectedDays.indexOf(day.index) !== -1}
                        />
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  {date.days.map((day, index) => {
                    return (
                      <TableCell
                        align="center"
                        key={index}
                        style={{
                          backgroundColor: day.off
                            ? theme.palette.primary.light
                            : theme.palette.secondary.light
                        }}
                      >
                        {day.order}
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedPersons.length === persons.length}
                      color="primary"
                      indeterminate={
                        selectedPersons.length > 0 &&
                        selectedPersons.length < persons.length
                      }
                      onChange={selectPersons}
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    padding="checkbox"
                  >
                    No
                  </TableCell>
                  <TableCell
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10
                    }}
                  >
                    T.C. No
                  </TableCell>
                  <TableCell
                    padding="none"
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10
                    }}
                  >
                    Ad Soyad
                  </TableCell>

                  <TableCell
                    padding="checkbox"
                    style={{ paddingRight: 10, paddingLeft: 10 }}
                  >
                    Çalışma Günü
                  </TableCell>
                  {date.days.map((day, index) => {
                    return (
                      <TableCell
                        align="center"
                        key={index}
                        style={{
                          backgroundColor: day.off
                            ? theme.palette.primary.light
                            : theme.palette.secondary.light
                        }}
                      >
                        {day.short}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {persons.map((user, index) => (
                  <TableRow
                    hover
                    key={index}
                    selected={selectedPersons.indexOf(index) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedPersons.indexOf(index) !== -1}
                        color="primary"
                        onChange={event => selectPerson(event, index)}
                        value={selectedPersons.indexOf(index) !== -1}
                      />
                    </TableCell>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell
                      style={{
                        paddingLeft: 10,
                        paddingRight: 10
                      }}
                    >
                      {user.tcNo}
                    </TableCell>
                    <TableCell
                      style={{
                        paddingLeft: 10,
                        paddingRight: 10
                      }}
                    >{`${user.ad} ${user.soyad}`}</TableCell>
                    <TableCell align="center">
                      {user.toplamCalismaSaati}
                    </TableCell>
                    {date.days.map((day, index) => {
                      return (
                        <TableCell
                          align="center"
                          key={index}
                          style={{
                            backgroundColor:
                              day.off && theme.palette.primary.light
                          }}
                        >
                          {user.puantaj[date.year][date.monthName][index]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Results;

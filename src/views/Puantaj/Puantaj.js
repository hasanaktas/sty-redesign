import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Header, Table } from './components';
import { generateMonth } from 'utils/generateDates';
import axios from 'utils/axios';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  filter: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementList = () => {
  const classes = useStyles();
  const [date, setDate] = useState(generateMonth(2020, '01'));
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState([]);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = () => {
      axios.get('/api/puantaj').then(response => {
        setPersons(response.data);
      });
    };

    fetchPersons();
  }, []);

  function degerguncelle(value) {
    const newPersons = persons.map((person, index) => {
      if (selectedPersons.includes(index)) {
        for (const selected of selectedDays) {
          person.puantaj[date.year][date.monthName][selected] = value;
        }
      }
      return person;
    });
    setPersons(newPersons);
    setSelectedPersons([]);
    setSelectedDays([]);
  }

  function otamatikdoldur() {
    const newPersons = persons.map((person, index) => {
      for (const day of date.days) {
        person.puantaj[date.year][date.monthName][day.index] = day.off
          ? 'HT'
          : '+';
      }
      return person;
    });

    setPersons(newPersons);
    setSelectedPersons([]);
    setSelectedDays([]);
  }

  function tumAlanlariTemizle() {
    const newPersons = persons.map((person, index) => {
      for (const day of date.days) {
        person.puantaj[date.year][date.monthName][day.index] = '';
      }
      return person;
    });

    setPersons(newPersons);
    setSelectedPersons([]);
    setSelectedDays([]);
  }

  /*  function hepsiniDoldur() {
    const newPersons = persons.map((person, index) => {
      date.days.forEach(function(day) {
        person.puantaj[date.year][date.monthName][day.index] = '+';
      });

      return person;
    });
    setPersons(newPersons);
    setSelectedPersons([]);
    setSelectedDays([]);
  }*/

  function ayDegistir(year, month) {
    setDate(generateMonth(year, month));
  }

  return (
    <div className={classes.root}>
      <Header
        ayDegistir={ayDegistir}
        degerguncelle={degerguncelle}
        otamatikDoldur={otamatikdoldur}
        tumAlanlariTemizle={tumAlanlariTemizle}
      />

      <Table
        className={classes.results}
        date={date}
        persons={persons}
        selectedDays={selectedDays}
        selectedPersons={selectedPersons}
        selectedWeek={selectedWeek}
        setSelectedDays={setSelectedDays}
        setSelectedPersons={setSelectedPersons}
        setSelectedWeek={setSelectedWeek}
      />
    </div>
  );
};

export default CustomerManagementList;

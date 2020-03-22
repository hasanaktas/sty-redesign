import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';

import Tab from '@material-ui/core/Tab';
import { OzetBilgiler } from './components';
export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Paper square>
        <Tabs
          aria-label="disabled tabs example"
          indicatorColor="primary"
          onChange={handleChange}
          scrollButtons="on"
          textColor="primary"
          value={value}
          variant="scrollable"
        >
          <Tab label="Özet Bilgiler" />
          <Tab label="Kimlik Bilgileri" />
          <Tab label="Adres Bilgileri" />
          <Tab label="Öğrenim Bilgileri" />
          <Tab label="Askerlik Bilgileri" />
          <Tab label="Özel Durumu" />
        </Tabs>
      </Paper>
      <div style={{ marginTop: 20, flexGrow: 1 }}>{value === 0 && <OzetBilgiler />}</div>
    </div>
  );
}

import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  TextField,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

const KisiEkle = props => {
  const { open, onClose } = props;
  const [form, setForm] = useState({
    tcNo: '',
    sicilNo: '',
    ad: '',
    soyad: '',
    birim: '',
    unvan: '',
    gorevYeri: '',
    kamudaBaslamaTarihi: new Date(),
    iseBaslamaTarihi: new Date(),
  });

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateDate = (name, date) => {
    setForm({
      ...form,
      [name]: date,
    });
  };
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      open={open}
    >
      <DialogTitle>Yeni Kişi</DialogTitle>
      <DialogContent>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              autoFocus
              fullWidth
              label="T.C. No"
              name="tcNo"
              onChange={updateField}
              value={form.tcNo}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Sicil No"
              name="sicilNo"
              onChange={updateField}
              value={form.sicilNo}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Ad"
              name="ad"
              onChange={updateField}
              value={form.ad}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Soyad"
              name="soyad"
              onChange={updateField}
              value={form.soyad}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Birimi"
              name="birim"
              onChange={updateField}
              value={form.birim}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Ünvanı"
              name="unvan"
              onChange={updateField}
              value={form.unvan}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Görev Yeri"
              name="gorevYeri"
              onChange={updateField}
              value={form.gorevYeri}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <KeyboardDatePicker
              autoOk
              format="DD-MM-YYYY"
              fullWidth
              InputAdornmentProps={{ position: 'start' }}
              inputVariant="outlined"
              label="Kamuda Başlama Tarihi"
              name="kamudaBaslamaTarihi"
              onChange={date => updateDate('kamudaBaslamaTarihi', date)}
              value={form.kamudaBaslamaTarihi}
              variant="inline"
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <KeyboardDatePicker
              autoOk
              format="DD-MM-YYYY"
              fullWidth
              InputAdornmentProps={{ position: 'start' }}
              inputVariant="outlined"
              label="İşe Başlamı Tarihi"
              name="iseBaslamaTarihi"
              onChange={date => updateDate('iseBaslamaTarihi', date)}
              value={form.iseBaslamaTarihi}
              variant="inline"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={onClose}
        >
          Vazgeç
        </Button>
        <Button
          color="primary"
          onClick={() => console.log(form)}
        >
          Kaydet
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default KisiEkle;

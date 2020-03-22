import React, { useState, useEffect } from 'react'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
  IconButton,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'
const KurumEkleDuzenleDialog = props => {
  const { seciliKurum, kurumEkleVeyaDuzenle } = props

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
    console.log(seciliKurum)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [form, setForm] = useState({ adi: seciliKurum ? seciliKurum.adi : '' })

  useEffect(() => {
    seciliKurum &&
      setForm({
        adi: seciliKurum.adi,
        id: seciliKurum.id,
      })
  }, [seciliKurum])

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {seciliKurum ? (
        <Tooltip title={'Kurumu Duzenle'}>
          <IconButton onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Button
          color="primary"
          endIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          KURUM EKLE
        </Button>
      )}

      <Dialog
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="form-dialog-title">
          {seciliKurum ? 'Kurum Düzenle' : 'Kurum Ekle'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            error={form.adi === ''}
            fullWidth
            label="Kurum Adı"
            margin="dense"
            name="adi"
            onChange={updateField}
            value={form.adi}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={handleClose}
          >
            Vazgeç
          </Button>
          <Button
            color="primary"
            disabled={form.adi === ''}
            onClick={() => {
              handleClose()
              kurumEkleVeyaDuzenle(form)
            }}
          >
            Onayla
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default KurumEkleDuzenleDialog

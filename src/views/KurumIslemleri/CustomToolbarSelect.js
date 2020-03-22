import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import KurumEkleDuzenle from './KurumEkleDuzenleDialog'
const defaultToolbarSelectStyles = {
  iconButton: {},
  iconContainer: {
    marginRight: '24px',
  },
  inverseIcon: {
    transform: 'rotate(90deg)',
  },
}

const CustomToolbarSelect = props => {
  const { classes, deleteRow, seciliKurum, kurumEkleVeyaDuzenle } = props
  const [open, setOpen] = useState(false)
  return (
    <div className={classes.iconContainer}>
      <KurumEkleDuzenle
        kurumEkleVeyaDuzenle={kurumEkleVeyaDuzenle}
        seciliKurum={seciliKurum}
      />

      <Tooltip title={'Kurumu Sil'}>
        <IconButton
          className={classes.iconButton}
          onClick={() => setOpen(true)}
        >
          <DeleteIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
      >
        <DialogTitle>Kurumu Sil</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Kurumu Silmek İstediğine Emin misin?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => setOpen(false)}
          >
            Vazgeç
          </Button>
          <Button
            autoFocus
            color="primary"
            onClick={deleteRow}
          >
            Sil
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withStyles(defaultToolbarSelectStyles, { name: 'CustomToolbarSelect' })(
  CustomToolbarSelect,
)

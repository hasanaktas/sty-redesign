import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import KurumEkleDuzenleDialog from './KurumEkleDuzenleDialog'
const defaultToolbarStyles = {
  iconButton: {},
}

const CustomToolbar = props => {
  const { kurumEkleVeyaDuzenle } = props

  return (
    <React.Fragment>
      <KurumEkleDuzenleDialog kurumEkleVeyaDuzenle={kurumEkleVeyaDuzenle} />
    </React.Fragment>
  )
}

export default withStyles(defaultToolbarStyles, { name: 'CustomToolbar' })(CustomToolbar)

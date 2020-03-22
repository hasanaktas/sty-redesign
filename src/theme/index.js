import { createMuiTheme } from '@material-ui/core';
import { trTR } from '@material-ui/core/locale';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const theme = createMuiTheme(
  {
    palette,
    typography,
    overrides,
  },
  trTR,
);

export default theme;

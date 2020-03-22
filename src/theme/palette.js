import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#0162FE',
    main: '#0184FE',
    light: '#CAE3FA',
  },
  secondary: {
    contrastText: white,
    main: '#FFB901',
    light: '#FFF8E5',
  },
  error: {
    contrastText: white,
    dark: '#D51B0A',
    main: '#FF5242',
    light: '#F2867C',
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  divider: colors.grey[200],
};

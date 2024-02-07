import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    direction:"rtl",
    primary: {
      main: '#e9e9e9',
    },
    secondary: {
      main: '#6b6969',
      light: '#F5EBFF',
      contrastText: '#47008F',
    },
  },
});

export default theme
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#C1E1F2',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text:{
      primary:'#054A70'
    }
  },
});

export default theme;
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#049952',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#2E5035',
      secondary: '#fff',
    },
  },
});

export default theme;

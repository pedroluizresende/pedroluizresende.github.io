import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50', // cor primária
    },
    secondary: {
      main: '#ecf0f1', // cor secundária
    },
    tertiary: {
      main: '#f1c40f', // cor terciária
    },
    background: {
      default: '#2c3e50',
    },
    text: {
      primary: '#ecf0f1',
      secondary: '#f1c40f',
    },
  },
  typography: {
    h1: {
      fontSize: '7rem',
      letterSpacing: '0.9rem',
      fontWeight: 100,
    },
    h2: {
      letterSpacing: '0.9rem',
      fontWeight: 100,
    },
    h3: {
      letterSpacing: '0.9rem',
      fontWeight: 100,
    },
  },
});

export default theme;

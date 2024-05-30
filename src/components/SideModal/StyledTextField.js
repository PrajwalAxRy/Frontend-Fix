import React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const StyledTextField = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        label="Database Password"
        variant="outlined"
        type="password"
        fullWidth
        InputLabelProps={{
          style: { color: '#ddd' },
        }}
        InputProps={{
          style: {
            color: '#ddd',
            backgroundColor: '#333',
            borderRadius: '10px',
          },
        }}
      />
    </ThemeProvider>
  );
};

export default StyledTextField;

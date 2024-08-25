'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Simple Homepage
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contacts</Button>
          <Button color="inherit">Login/Signup</Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to My Website
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            This is a simple homepage built with React and Material-UI.
          </Typography>
          <Button variant="contained" color="primary" href="#" sx={{ mt: 3 }}>
            Get Started
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

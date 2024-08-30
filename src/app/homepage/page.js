'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Box, CssBaseline, Grid, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // Red color for a bold automotive look
    },
    secondary: {
      main: '#212121', // Dark grey/black for contrast
    },
    background: {
      default: '#f5f5f5', // Light grey background
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 700, // Bolder text for headings
    },
    h5: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 700,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CarCare
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">Login/Signup</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
           The Site for a quick and reliable service
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Expert mechanics ready to get your car back on the road.
          </Typography>
          <Button variant="contained" color="primary" href="#" sx={{ mt: 3 }}>
            Book an Appointment
          </Button>
        </Box>

        <Grid container spacing={4} sx={{ mt: 5 }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h2" color="secondary">
                Our Services
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                - Oil Change<br/>
                - Brake Inspection<br/>
                - Tire Rotation<br/>
                - Engine Diagnostics<br/>
                - Transmission Repair
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h2" color="secondary">
                What Our Clients Say
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                "AutoFix is the best! Quick service and very professional."
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                "Affordable prices and high-quality work. Highly recommend!"
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;


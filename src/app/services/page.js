'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Box, CssBaseline, Grid, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    },
    secondary: {
      main: '#212121',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 700,
    },
  },
});

function Services() {
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
            Our Services
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Quality and reliability in every service we offer.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mt: 5 }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h2" color="secondary">
                Oil Change
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Keep your engine running smoothly with our fast and efficient oil change service. We use only the highest quality oils to ensure optimal performance.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h2" color="secondary">
                Brake Inspection & Repair
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Ensure your safety on the road with our comprehensive brake inspection and repair services. Our experts use top-grade materials for replacements.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h2" color="secondary">
                Tire Rotation & Alignment
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Extend the life of your tires with our precise tire rotation and alignment services. We help you maintain even wear for a smoother ride.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h2" color="secondary">
                Engine Diagnostics
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Get to the root of your engine issues with our advanced diagnostic tools. We provide accurate assessments to help you avoid costly repairs.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h2" color="secondary">
                Transmission Repair
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Trust our skilled technicians to handle your transmission repairs. We offer both minor and major transmission services to keep your car running smoothly.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h2" color="secondary">
                More Services
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                We also offer battery replacement, air conditioning repair, and more. Contact us for a full list of services and pricing.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Services;

'use client';

import React from 'react';
import { Button, Container, Paper, Grid, Box, Typography } from '@mui/material';
import Layout from '../components/layout'; // or '../layouts/Layout'
import Footer from '../components/footer'; // Import Footer component

function AdminUI() {
  return (
    <>
      {/* Use Layout.js for the AppBar */}
      <Layout>
        {/* Updated Background image */}
        <Box
          sx={{
            backgroundImage: `url("/img/3.jpg")`, // Updated background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh', // Full viewport height
            padding: '20px',
            marginTop: '-64px', // Adjusted to offset AppBar height
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* Content container */}
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                {/* Admin Panel Header */}
                <Grid item xs={12}>
                  <img
                    src="/CarCare.png"
                    alt="Car Care Admin Panel"
                    style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </Grid>

                {/* Admin Features Title */}
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0288d1' }} gutterBottom>
                    Admin Panel
                  </Typography>
                </Grid>

                {/* Admin Features Buttons */}
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ textTransform: 'none' }}
                      href="/manageCustomers"
                    >
                      Manage Customers
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ textTransform: 'none' }}
                      href="/manageMechanics"
                    >
                      Manage Mechanics
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ textTransform: 'none' }}
                      href="/bookingHistory"
                    >
                      View Booking History
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ textTransform: 'none' }}
                      href="/purchaseHistory"
                    >
                      View Order History
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Box>
      </Layout>

      {/* Footer section */}
      <Footer /> {/* Add Footer here */}
    </>
  );
}

export default AdminUI;
